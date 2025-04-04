import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";



const Category = () => {

    const axiosSecure = useAxiosSecure();
    const [categoryProducts, setCategoryProducts] = useState([]);

    const {data : categories =[], isLoading, refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await axiosSecure(`/categories`)
            return response.data;
        },
        
    });

    const {
        data: allItems = []} = useQuery({
        queryKey: ["allItems"],
        queryFn: async () => {
          const response = await axiosSecure.get(`/allProducts`);
          return response.data;
        },
      });
     // console.log(allItems)

    
      refetch();
      
  
    useEffect(() => {
        const categoryWiseProducts = categories.map(category => ({
          category: category.category,
          products: allItems.filter(item => item.category === category.category),
        }));
      
        setCategoryProducts(categoryWiseProducts);
      }, [allItems, categories, refetch]);


    if(isLoading){
        return <Loading></Loading>
    }
 

    return (
       <div className="w-11/12 mx-auto py-14">
            <div className=" ">
                <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl mb-7 text-center">Categories({categories.length})</h2>
            </div>
         <div className="w-11/12 mx-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ">
            {
                categories.map(category =>{

                    const matchCategory = categoryProducts.find( 
                        item => item.category === category.category
                    );
                    const catItems = matchCategory ? matchCategory.products.length : 0;

                        return (
                            <Link to={`/medicines/${category.category}`}>
                                <div className="category-item p-2  rounded-lg bg-gradient-to-br from-[#fcfbff] to-[#dc2626] relative">
                                    <div className="rounded-md ">
                                        <img src={category.photo} className=" h-36 w-full rounded-md" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="sm:font-semibold lg:text-xl md:text-lg text-base">{category.category}<span className="font-semibold">({catItems})</span></h3>
                                        {/* <p>{category.cat_description}</p> */}
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                )
            }
           
        </div>
       </div>
    );
};

export default Category;