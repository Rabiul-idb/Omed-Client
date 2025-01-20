import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: myCarts = [] , refetch} = useQuery({
        queryKey: ['myCarts', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/myCarts?email=${user.email}`)
            return response.data;
        }
    });
    return [myCarts, refetch]
};

export default useCart;