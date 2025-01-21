import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { axiosSecure } from "../Hooks/useAxiosSecure";


const Category = () => {

    const {data : categories, isLoading, refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await axiosSecure(`/categories`)
            return response.data;
        },
        
    });
    if(isLoading){
        return <Loading></Loading>
    }
    refetch();

    return (
       <div className="w-11/12 mx-auto py-14">
            <div className=" ">
                <h2 className="font-bold text-4xl mb-7">Categories({categories.length})</h2>
            </div>
         <div className="w-11/12 mx-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 ">
            {
                categories.map(category =>
                    <Link to={`/medicines/${category.category}`}>
                        <div className="category-item p-2  rounded-lg bg-gradient-to-br from-[#fcfbff] to-[#b398ff] relative">
                            <div className="rounded-md ">
                                <img src={category.photo} className=" h-20 w-full rounded-md" alt="" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl">{category.category}</h3>
                                {/* <p>{category.cat_description}</p> */}
                            </div>
                        </div>
                    </Link>
                )
            }
           
        </div>
       </div>
    );
};

export default Category;