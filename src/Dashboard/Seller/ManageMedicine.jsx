import React from "react";
import SellerProducts from "./SellerProducts";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading";
import AddMedicine from "../AddMedicine";
import { Helmet } from "react-helmet-async";

const ManageMedicine = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: sellerMedicine = [], isLoading , refetch} = useQuery({
    queryKey: ["sellerMedicine"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/sellerMedicine/${user?.email}`);
      return response.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>

      <Helmet>
            <title>OMED - Online Medicine | Manage Medicine</title>
      </Helmet>

      <div className="flex justify-between items-center mb-4">
        <h2 className="lg:text-2xl md:text-xl text-lg font-bold">All Added Medicines</h2>
        <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn"
        >
          + Add Medicine
        </button>
      </div>

      {sellerMedicine && sellerMedicine.length > 0 ? (
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
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {sellerMedicine.map((item, index) => (
                  <>
                    <SellerProducts item={item} index={index}></SellerProducts>
                  </>
                ))}
              </tbody>
            </table>

          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl text-red-600 font-semibold">
            No Medicine Added to your Account
          </h3>
        </>
      )}

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <AddMedicine refetch={refetch}></AddMedicine>
            </div>
            <form method="dialog" className="modal-backdrop">
            <button>close</button>
            </form>
        </dialog>

    </div>
  );
};

export default ManageMedicine;
