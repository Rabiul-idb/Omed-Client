import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";


const TopSelling = () => {

    const {data : allProducts, isLoading, refetch} = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const response = await axios(`${import.meta.env.VITE_API_URL}/allProducts`)
            return response.data;
        },
        
    });
    if(isLoading){
        return <Loading></Loading>
    }
    refetch();
  
  //console.log(allProducts)
    
    
    

    return (
        <div className="w-11/12 mx-auto pb-14">
             <div className=" flex justify-center gap-10 items-center mb-7">
                <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center">Top Selling Products </h2>
                <Link to={'/shop'} className="btn bg-red-600 text-white hover:bg-red-700 hover:text-white justify-self-end" >See ALL</Link>
            </div>
            {
                allProducts && allProducts.length >0 ? <>

                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
                        {
                            allProducts.map(product => 
                                <div className="border rounded-md p-4 hover:shadow-2xl duration-300">
                                    <ProductCard product={product}></ProductCard>
                                </div>
                            ).slice(0, 10)
                        }
                    </div>
                </> : <><h3 className="text-2xl text-red-600 font-semibold">No Product Available</h3></>
            }
        </div>
    );
};

export default TopSelling;