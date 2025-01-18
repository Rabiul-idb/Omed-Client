import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";


const TopSelling = () => {
    return (
        <div className="w-11/12 mx-auto pb-14">
             <div className=" flex justify-between items-center">
                <h2 className="font-bold text-4xl mb-7">Top Selling Products</h2>
                <Link className="btn bg-red-600 text-white hover:bg-red-700 hover:text-white" >See ALL</Link>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                <div className="border rounded-md p-4 hover:shadow-2xl duration-300">
                    <ProductCard></ProductCard>
                </div>
                <div className="border rounded-md p-4 hover:shadow-2xl duration-300">
                    <ProductCard></ProductCard>
                </div>
                <div className="border rounded-md p-4 hover:shadow-2xl duration-300">
                    <ProductCard></ProductCard>
                </div>
                <div className="border rounded-md p-4 hover:shadow-2xl duration-300">
                    <ProductCard></ProductCard>
                </div>
            </div>
        </div>
    );
};

export default TopSelling;