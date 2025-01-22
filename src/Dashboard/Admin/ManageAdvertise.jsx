import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const ManageAdvertise = () => {


    const axiosSecure = useAxiosSecure();

    const { data: all_ads =[], isLoading, refetch} = useQuery({
        queryKey: ["all_ads"],
        queryFn: async () =>{
            const response = await axiosSecure.get(`/advertises`)
            return response.data;
        }
    })
    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Advertisements</h2>
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
              <th>My Info</th>
              <th>Requested Date</th>
              <th>Status</th>
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
                  <button className={`btn btn-ghost btn-xs ${ad.status === 'pending' ? 'text-yellow-600' : 'bg-green-700'}`}>
                    {ad.status}
                  </button>
                  {/* <button
                    onClick={() => handleDeleteCategory(category._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdDeleteForever className="text-2xl text-red-600" />
                  </button> */}
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