import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Loading from "../../Components/Loading";
import { Helmet } from "react-helmet-async";

const ManageUser = () => {

    const axiosSecure = useAxiosSecure();
    const [selectedRoles, setSelectedRoles] = useState({});
    const [admins, setAdmins] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [customers, setCustomers] = useState([]);

    const {data: allUsers =[], isLoading, refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const response = await axiosSecure.get('/allUsers')
            return response.data;
        }
    })

    useEffect( () =>{
        if(allUsers){
            const admins = allUsers.filter(user => user.role === 'admin');
            setAdmins(admins)

            const sellers = allUsers.filter(user => user.role === 'seller');
            setSellers(sellers)

            const customer = allUsers.filter(user => user.role === 'customer');
            setCustomers(customer)
        }

    }, [allUsers])

    if(isLoading){
        return <Loading></Loading>
    }

    const handleSelect = (userId, value) => {
        setSelectedRoles((prev) => ({
          ...prev,
          [userId]: value,
        }));
      };

    const handleUpdateRole = async(id) =>{
        const selectedRole = selectedRoles[id];
        if (!selectedRole) {
        toast("Please select a role before applying!", {
            type: "error",
        });
        return;
        }
        try {
            //console.log(id, selectedRole)
            await axiosSecure.put(`/updateRole/${id}`, {
                role: selectedRole,
            })
            .then((res) => {
                if(res.data.modifiedCount > 0){
                    refetch();
                    toast("Role updated successfully!", {
                        type: "success",
                    });
                }
            })
        }
        catch (err) {
            //console.log(err);   
            toast("Failed to update role!", {
                type: "error",
            });
        };
                
    }


  return (
    <div>
          <Helmet>
                <title>OMED - Online Medicine | Manage Users</title>
          </Helmet>

      <div className="flex gap-10 items-center mb-4">
        <h2 className="lg:text-xl text-base font-semibold">Admins: ({admins.length})</h2>
        <h2 className="lg:text-xl text-base font-semibold">Sellers: ({sellers.length})</h2>
        <h2 className="lg:text-xl text-base font-semibold">Customers: ({customers.length})</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>
              <th>Name & Role</th>
              <th>Email</th>
              <th>Joining Date</th>
              <th>Update Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
           {
            allUsers.map((user, index) => 
                <tr>
                    <th>
                    <label>
                        {index +1}
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src={user.photo}
                            alt="user"
                            />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.role}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>{user.joining_date}</td>
                    <td>
                       {
                        user.role === 'admin' ? user.role : <>
                           <select onChange={(e) => handleSelect(user._id, e.target.value)}
                    value={selectedRoles[user._id] || ""} className="select select-bordered w-full max-w-xs">
                            <option value="" disabled >Update Role</option>
                            <option value="customer" >Customer</option>
                            <option value="seller" >Seller</option>
                            <option value="admin" >Admin</option>

                        </select>
                        </>
                       }
                    </td>
                    <th>
                    {
                      user.role === 'admin' ? 'Not Allowed' : <>
                        <button onClick={() => handleUpdateRole(user._id)} className="btn btn-xs">Apply</button>
                      </>
                    }
                    </th>
                </tr>
            )
           }

          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageUser;
