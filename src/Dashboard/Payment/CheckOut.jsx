import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

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
    // console.log(myOrder)
    // const {_id, 'customer-name', 'customer-email' } = myOrder || {}

    return (
        <div>
            <Helmet>
                <title>OMED - Online Medicine | CheckOut</title>
            </Helmet>
            <h3 className="lg:text-2xl text-xl font-semibold text-center mb-5">CheckOut and Confirm Order</h3>
            <div className="">

                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>

            </div>
        </div>
    );
};

export default CheckOut;