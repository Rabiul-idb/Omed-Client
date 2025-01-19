import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";


const TopSelling = () => {

    const {data : allProducts, isLoading} = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/allProducts`)
            return response.data;
        },
        
    });

    console.log(allProducts)
    
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className="w-11/12 mx-auto pb-14">
             <div className=" flex justify-between items-center">
                <h2 className="font-bold text-4xl mb-7">Top Selling Products </h2>
                <Link className="btn bg-red-600 text-white hover:bg-red-700 hover:text-white" >See ALL</Link>
            </div>
            {
                allProducts && allProducts.length >0 ? <>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                        {
                            allProducts.map(product => 
                            <div className="border rounded-md p-4 hover:shadow-2xl duration-300">
                                <ProductCard product={product}></ProductCard>
                            </div>
                        )
                        }
                    </div>
                </> : <><h3 className="text-2xl text-red-600 font-semibold">No Product Available</h3></>
            }
        </div>
    );
};

export default TopSelling;