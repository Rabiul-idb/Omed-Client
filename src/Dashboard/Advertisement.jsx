import { useQuery } from "@tanstack/react-query";
import AddAdvertise from "../Modals/AddAdvertise";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";

const Advertisement = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const { data: my_ads =[], isLoading, refetch} = useQuery({
        queryKey: ["my_ads"],
        queryFn: async () =>{
            const response = await axiosSecure.get(`/advertises/${user?.email}`)
            return response.data;
        }
    })
    if(isLoading){
        return <Loading/>
    }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Advertisements</h2>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn"
        >
          + Add Advertise
        </button>
      </div>

      {
        my_ads && my_ads.length > 0 ? <>

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
              
              {
              my_ads.map((ad, index) => (
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
                  
                  </th>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>

        </> : <>
          <h3 className="text-xl text-red-600 font-semibold">
            You have no Added or Pending Advertises 
          </h3>
        </>
      }
      

      <AddAdvertise refetch={refetch}></AddAdvertise>
    </div>
  );
};

export default Advertisement;
