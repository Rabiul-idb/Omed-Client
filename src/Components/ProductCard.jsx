import { FaCartPlus, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ProductCard = () => {
    return (
        <div>
             <div>
                  <img
                    src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-xl leading-tight my-2">
                  Paracetamol tablet
                </h2>
                <hr></hr>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-base font-bold text-black">
                    $ <span>20</span>
                  </p>
                  <Link className="btn">
                    <FaCartPlus />
                  </Link>
                  <button className="btn">
                    <FaEye />
                  </button>
                </div>
        </div>
    );
};

export default ProductCard;