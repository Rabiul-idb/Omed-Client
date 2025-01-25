import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const ManageAdvertise = () => {

  const axiosSecure = useAxiosSecure();
  const [activeAds, setActiveAds] = useState([]);
  const [pendingAds, setPendingAds] = useState([]);

    const { data: all_ads =[], isLoading, refetch} = useQuery({
        queryKey: ["all_ads"],
        queryFn: async () =>{
            const response = await axiosSecure.get(`/advertises`)
            return response.data;
        }
    })

    // handle toggle status
    const handleToggle = async(id, currentStatus) =>{
      try {
        await axiosSecure.put(`/toggleStatus/${id}` ,{
          status: currentStatus === 'pending' ? 'active' : 'pending',
        })
        refetch();
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      if (all_ads.length > 0) {
        const activeAd = all_ads.filter((adItem) => adItem.status === "active");
        const pendingAd = all_ads.filter((adItem) => adItem.status === "pending");
  
        setActiveAds(activeAd);
        setPendingAds(pendingAd);
      }
    }, [all_ads]);


    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            <div>
          <div className="flex gap-10 items-center mb-4 ">
            <h2 className="text-xl font-semibold">Active Ads ({activeAds.length}),</h2>
            <h2 className="text-xl font-semibold">Pending Ads ({pendingAds.length})</h2>
          </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>AD_Photo</th>
              <th>Ad_Name</th>
              <th>Description</th>
              <th>Seller Info</th>
              <th>Requested Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {all_ads.map((ad, index) => (
              <tr className="hover:bg-slate-100">
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <img src={ad.ad_photo} className="w-32 h-20" />
                </td>
                <td>{ad.ad_name}</td>
                <td>{ad.add_description}</td>
                <td>
                    {ad.seller.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{ad.seller.email}</span>
                </td>
                <td>{ad.req_date}</td>
                <th className="space-x-4">
                  <button className={`btn cursor-default btn-ghost btn-xs ${ad.status === 'pending' ? 'text-yellow-600' : 'bg-green-700'}`}>
                    {ad.status}
                  </button>
                  {/* <button
                    onClick={() => handleDeleteCategory(category._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdDeleteForever className="text-2xl text-red-600" />
                  </button> */}
                </th>
                <th>
                  <input onChange={()=> handleToggle(ad._id, ad.status)} type="checkbox" className="toggle" defaultChecked = {ad.status === 'active'} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
        </div>
    );
};

export default ManageAdvertise;