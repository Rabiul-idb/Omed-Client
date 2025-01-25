import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import ProductRow from "../Components/ProductRow";
import ItemDetails from "../Modals/ItemDetails";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Shop = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedValue, setSelectedValue] = useState('default');
    const [sortedMedicine, setSortedMedicine] = useState([])
    const axiosSecure = useAxiosSecure();

   // Fetch all items using React Query
    const { data: allItems = [], isLoading } = useQuery({
        queryKey: ["allItems"],
        queryFn: async () => {
            const response = await axiosSecure.get(`/allProducts`);
            return response.data;
        },
    });

    
    const handleSelect = (e) => {
        setSelectedValue(e.target.value);
    };

    useEffect(() => {
        if (selectedValue !== "default") {
            const sortedData = allItems.filter((item) => item.brand === selectedValue);
            setSortedMedicine(sortedData);
        } else {
            setSortedMedicine(allItems);
        }
    }, [selectedValue, allItems]);

     
    if (isLoading) {
      return <Loading />;
  }


  return (

    <div className="w-11/12 mx-auto pb-14">

    <Helmet>
      <title>OMED - Online Medicine | Shop</title>
    </Helmet>

      <div className=" flex justify-between items-center">
        <h2 className="font-bold text-2xl my-7">All Avilable Medicines ({sortedMedicine.length}) </h2>
        <div className="text-right mb-5">
          <span className="">Short by Company:</span>
          <select
            value={selectedValue}
            onChange={handleSelect}
            name=""
            className="border px-2 py-1 ml-2"
            id=""
          >
            <option value="default">Default</option>
            <option value="square">Square</option>
            <option value="beximco">Beximco</option>
            <option value="incepta">Incepta</option>
            <option value="opsonin">Opsonin</option>
            <option value="healthcare">Healthcare</option>
            <option value="drag">drag</option>
          </select>
        </div>
      </div>
      {sortedMedicine && sortedMedicine.length > 0 ? (
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
                    sortedMedicine.map((item, index) => <>
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

export default Shop;
