import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import { axiosSecure } from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading";
import { Helmet } from "react-helmet-async";


const CheckOut = () => {

    const {user} = useAuth();

    const {data : myOrder,isLoading} = useQuery({
        queryKey: ['myOrder'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/myOrders/${user?.email}`)
            return response.data;
        },
    });
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(myOrder)
    // const {_id, 'customer-name', 'customer-email' } = myOrder || {}

    return (
        <div>
            <Helmet>
                <title>OMED - Online Medicine | CheckOut</title>
            </Helmet>
            <h3 className="text-2xl font-semibold text-center mb-5">Confirm Order</h3>
            <div className="flex flex-col items-center justify-center border rounded-lg mb-5">

            </div>
        </div>
    );
};

export default CheckOut;