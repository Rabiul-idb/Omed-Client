import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Components/Loading";
import ProductRow from "../Components/ProductRow";
import ItemDetails from "../Modals/ItemDetails";
import { useState } from "react";

const Shop = () => {
  const {
    data: allItems,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allItems"],
    queryFn: async () => {
      const response = await axios(
        `${import.meta.env.VITE_API_URL}/allProducts`
      );
      return response.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  refetch();

  //console.log(allProducts)

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="w-11/12 mx-auto pb-14">
      <div className=" flex justify-between items-center">
        <h2 className="font-bold text-2xl my-7">All Avilable Medicines ({allItems.length}) </h2>
        <Link className="btn bg-red-600 text-white hover:bg-red-700 hover:text-white">
          See ALL
        </Link>
      </div>
      {allItems && allItems.length > 0 ? (
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
                    allItems.map((item, index) => <>
                        <ProductRow item={item} index={index} setSelectedItem={setSelectedItem}></ProductRow>
                    {/* <ItemDetails itemId={item._id}></ItemDetails> */}
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

export default Shop;
