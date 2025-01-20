import { FaCartPlus, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

  const {_id, brand_name, generic_name, brand, category, price, quantity, description, photo, seller} = product || {}

  return (
    <div>
      <div>
        <img
          src={photo}
          className="w-full object-cover"
          alt=""
        />
      </div>
      <h2 className="font-bold text-xl leading-tight my-2">
        {brand_name}
      </h2>
      <hr></hr>
      <div className="flex justify-between items-center mt-4">
        <p className="text-base font-bold text-black">
          $ <span>{price}</span>
        </p>
        {/* <Link to={`/products/${_id}`} className="btn">
          <FaCartPlus />
        </Link> */}
        <Link to={`/productDetails/${_id}`} className="btn">
          <FaEye />
        </Link>
      </div>


    </div>
  );
};

export default ProductCard;
