import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSeller = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isSeller, isPending: isSellerLoading } = useQuery({
        queryKey: [user?.email, 'isSeller'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/seller/${user?.email}`)
            return response.data?.seller;
        }
    })

    return [isSeller, isSellerLoading];
};

export default useSeller;