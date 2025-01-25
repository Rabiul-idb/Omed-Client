import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";
import useSeller from "../Hooks/useSeller";


const PrivateSeller = ({children}) => {

    const {user , loading} = useAuth();
    const [isSeller, isSellerLoading] = useSeller()
    const location = useLocation();

    if(loading || isSellerLoading){
        return <Loading></Loading>
    }

    if(user && isSeller){
        return children;
    }
    
    <Navigate to={'/login'} state={location.pathname}></Navigate>;
};

export default PrivateSeller;