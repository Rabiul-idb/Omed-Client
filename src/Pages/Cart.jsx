import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import useCart from "../Hooks/useCart";
import { FaDeleteLeft } from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [myCarts, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const [quantities, setQuantities] = useState(myCarts.map(() => 1)); 
  const navigate = useNavigate();


  const handleValueChange = (index, value) => {

    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? Math.max(parseInt(value) || 1, 1) : qty)) 
    );
  };
    
    const total = myCarts.reduce((acc, item, index) => acc + item.price * quantities[index], 0);
    const grandTotal = parseInt(total) -5;
     
 
  

  const handleDeleteCart = async(id) =>{
    // await axiosSecure.delete(`/myCarts/${id}`)
    // .then((response) => {
    //     console.log(response.data);
    // })

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then (result => {
            if(result.isConfirmed){
                axiosSecure.delete(`/myCarts/${id}`)
                .then((res) => {
                    // console.log(data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Order has been deleted.",
                            icon: "success",
                        });
                    
                    }
                })
            }
        })
        
    }

    const handlePurchase = async()=>{

        const orderInfo ={
            "product-item": myCarts.length,
            "shipping-fee": parseInt(10),
            'discount': 15,
            "total-bill": grandTotal,
            "order-status": "pending",
            "order-date": new Date().toLocaleString(),
            "customer-name": user?.displayName,
            "customer-email": user?.email,
            
        }

         console.log(orderInfo);
         
         if(myCarts.length > 0){
            await axiosSecure.post('/orders', orderInfo)
            navigate('/dashboard/checkOut');
         }else{
          Swal.fire({
            title: "Not Found!",
            icon: "warning",
            text: "You have no Product in your cart",
            confirmButtonText: "Shop Now",

          }).then(result =>{
            if(result.isConfirmed){
              navigate('/');
            }
          });
         }
    }


  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-3">My Cart Items ({myCarts.length})</h2>
      <div className="flex gap-5">
        <div className="overflow-x-auto border rounded-md">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th> #</th>
                <th>Product</th>
                <th>Price</th>
                <th>Avai. Qty</th>
                <th>Order Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myCarts.map((cart, index) => (
                <tr>
                  <th>{index +1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={cart.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{cart.brand_name}</div>
                        <div className="text-sm opacity-50">{cart.brand}</div>
                      </div>
                    </div>
                  </td>
                  <td>{cart.price}</td>
                  <td>{cart.quantity}</td>
                  <td className="w-24">
                    <input
                            type="number"
                            max={cart.quantity}
                            value={quantities[index]} // Bind to specific row's quantity
                            onChange={(e) => handleValueChange(index, e.target.value)} // Update only this row
                            className="input input-bordered input-sm w-full text-center"
                        />
                  </td>
                  <th>
                    <p className="text-base font-bold" > {cart.price * quantities[index]} $</p>
                  </th>
                  <td>
                    <button onClick={()=> handleDeleteCart(cart._id)} className="btn btn-ghost btn-xs">
                    <MdDeleteForever className="text-2xl text-red-600" />
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1 p-5 border rounded-md">
              <h3 className="font-semibold text-xl">Billing Summary</h3>
              <hr className="my-3"></hr>
              <div className="flex justify-between items-center mb-2">
                <p className="text-base font-medium">Subtotal</p>
                <p className="text-base font-medium">${parseInt(total)}</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-base font-medium">Shipping</p>
                <p className="text-base font-medium">+ $10</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-base font-medium">Discount</p>
                <p className="text-base font-medium">- $15</p>
              </div>
              <hr className="my-2 "></hr>
              <div className="flex justify-between items-center">
                <p className="text-base font-medium">Total</p>
                <p className="text-base font-medium">${grandTotal}</p>
              </div>

              <button onClick={handlePurchase} className="btn mt-5 w-full bg-red-600 text-white hover:bg-red-700 hover:text-white">CheckOut</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
