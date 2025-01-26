import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../Components/Loading";
import axios from "axios";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";


const ProductDetails = () => {

        const {id} = useParams();
        const {user  } = useAuth();
        const axiosSecure = useAxiosSecure();
        const navigate = useNavigate();
        const [, refetch] = useCart();

    const {data : Product =[], isLoading} = useQuery({
        queryKey: ['Product', id],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/productDetails/${id}`)
            return response.data;
        },
    });
    if(isLoading){
        return <Loading></Loading>
    }

const {_id, brand_name, generic_name, brand, category, price, discount, quantity, description, photo, seller} = Product || {};
//console.log(Product);


const handleAddToCart = () =>{
    if(user && user?.email){
        const cartItems = {
            productId: _id,
            brand_name,
            brand,
            price,
            photo,
            discount,
            quantity,
            seller,
            email: user?.email,
        }
        axiosSecure.post('/myCarts', cartItems)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: `${brand_name} is Added to your Cart`,
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                refetch();
            }
        })
    }
    else{
        Swal.fire({
            title: "You are not Logged In",
            text: "Please Login to add cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login!",
          }).then(result => {
            if (result.isConfirmed) {
                navigate('/login');
            }
          })
    }
}

    return (
        <div className="w-11/12 mx-auto">
           <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <div className=" grid place-items-center relative">
                    <img src={photo} alt="product" className="w-3/4  object-cover" />
                    {
                        discount > 0 && <p className="absolute bg-red-600 text-white  p-2 rounded-md top-4 right-2">
                            <span>{discount}</span>% Off
                        </p> 
                    }
                </div>
                <div className="py-5">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">{brand_name}</h2>
                    <p className="text-slate-600 font-semibold mb-3">Category: {category}</p>
                    <p className="text-slate-600">Generic Name: {generic_name}</p>
                    <p className="text-slate-600">Company: {brand}</p>
                    <hr className="my-5"></hr>
                    <p className="text-slate-600 my-6">{description}</p>
                    <hr className="my-5"></hr>
                    <div className="flex items-center gap-5 mb-5">
                        <p className="text-slate-600">Seller: {seller.name} </p>
                        <img src={seller.photo} className="h-10 w-10 rounded-full" alt="" />
                    </div>
                    <p className="text-slate-600">Quantity: {quantity} Unit lefts</p>
                    <div className="flex justify-between items-center">
                        <h3 className="md:text-2xl text-xl font-semibold">Price: {price}$</h3>
                        
                        <button onClick={handleAddToCart} disabled={quantity <= 0 ? true : false} className="btn bg-red-600 text-white hover:bg-red-700 hover:text-white">
                            {
                                quantity > 0 ? "Add To Cart" : "Out of Stock"
                            }
                        </button>
                    </div>
                </div>
           </div>

           {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button> */}
            <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{brand}</h3>
                <p className="py-4">{quantity}</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>


        </div>
    );
};

export default ProductDetails;