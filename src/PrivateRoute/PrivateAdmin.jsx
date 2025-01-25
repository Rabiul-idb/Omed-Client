import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";


const PrivateAdmin = ({children}) => {

    const {user , loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children;
    }
    <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateAdmin;