import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../Components/Loading";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const ProductDetails = () => {

const {id} = useParams();
    
console.log(id);

const {data : Product =[], isLoading, refetch} = useQuery({
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
console.log(Product);


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
                    <h2 className="text-3xl font-bold">{brand_name}</h2>
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
                        <h3 className="text-2xl font-semibold">Price: {price}$</h3>
                        
                        <Link className="btn bg-red-600 text-white hover:bg-red-700 hover:text-white">Purchase</Link>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default ProductDetails;