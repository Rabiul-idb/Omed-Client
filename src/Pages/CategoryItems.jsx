
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import ProductRow from "../Components/ProductRow";
import ItemDetails from "../Modals/ItemDetails";
import { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const CategoryItems = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const categoryItem = useParams();
    const axiosSecure = useAxiosSecure();

    //console.log(categoryItem.category);

  const {
    data: allItems,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allItems"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/allProducts`);
      return response.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  //refetch();

  //console.log(allProducts)
 
  const categoryItems = allItems.filter(items => items.category === categoryItem.category)
  //console.log(categoryItems)
  

  return (
    <div className="w-11/12 mx-auto pb-14">
      <div className=" flex justify-between items-center">
        <h2 className="font-bold text-2xl my-7">All Avilable {categoryItem.category} ({categoryItems.length}) </h2>
        
      </div>
      {categoryItems && categoryItems.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th> #</th>
                  <th>Medicine Name</th>
                  <th>Medicine Type</th>
                  <th>Company</th>
                  <th>Avai. Qty</th>
                  <th>Price (unit)</th>
                  <th>Discount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
                {
                    categoryItems.map((item, index) => <>

                        <ProductRow item={item} index={index} setSelectedItem={setSelectedItem}></ProductRow>
                    
                    </>)
                        
                }
          
              </tbody>
            </table>

             {/* Modal */}
             {selectedItem && (
               <ItemDetails selectedItem={selectedItem} setSelectedItem={setSelectedItem}></ItemDetails>
            )}
            
          </div>
        </>
      ) : (
        <>
          <h3 className="text-2xl text-red-600 font-semibold">
            No Medicine Available
          </h3>
        </>
      )}
    </div>
  );
  {
    
  }
};

export default CategoryItems;


