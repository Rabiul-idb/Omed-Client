import { FaEye } from "react-icons/fa6";
import ItemDetails from "../Modals/ItemDetails";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import useAuth from "../Hooks/useAuth";
import { FaCartPlus } from "react-icons/fa";

const ProductRow = ({ item, index, setSelectedItem }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const {
    _id,
    brand_name,
    generic_name,
    brand,
    category,
    price,
    discount,
    quantity,
    description,
    photo,
    seller,
  } = item || {};
  //console.log(Product);

  const addToCart = async () => {
    if (user && user?.email) {
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
      };
      await axiosSecure.post("/myCarts", cartItems).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success",
            text: `${brand_name} is Added to your Cart`,
            icon: "success",
            confirmButtonText: "OK",
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please Login to add cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <>
      <div className="bg-white rounded-md border p-5 hover:shadow-md duration-200">
        <div>
          <img src={photo} className="w-full object-cover" alt="" />
        </div>
        <h2 className="font-bold md:text-xl sm:text-lg text-base leading-tight my-2">
          {brand_name}
        </h2>
        <hr></hr>
        <div className="flex justify-between items-center mt-4">
          <p className="md:text-base text-sm font-bold text-black">
            $ <span>{price}</span>
          </p>
          {/* <Link to={`/products/${_id}`} className="btn">
          
        </Link> */}
        <FaCartPlus onClick={addToCart} className="cursor-pointer "/>         
          <Link to={`/productDetails/${_id}`} className="">
            <FaEye />
          </Link>
        </div>
      </div>

      {/* <tr>
        <th>
          <label>{index + 1}</label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20">
                <img src={item.photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.brand_name}</div>
              <div className="text-sm opacity-50">{item.generic_name}</div>
            </div>
          </div>
        </td>
        <td>{item.category}</td>
        <td>{item.brand}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <th>{item.discount} %</th>
        <th className="flex mt-6 gap-3 items-center justify-center">
          <button onClick={addToCart} className="btn btn-xs">Select</button>
          <button onClick={() => setSelectedItem(item)} className="btn btn-xs">
            <FaEye className="text-base" />
          </button>
        </th>
      </tr> */}
    </>
  );
};

export default ProductRow;
