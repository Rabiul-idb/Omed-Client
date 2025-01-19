import { useContext } from "react";
import { contextApi } from "../AuthContex/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";


const PrivateRoute = ({children}) => {
    
    const {setUser, user, loading} = useContext(contextApi);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>;
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to={'/login'} state={location.pathname}></Navigate>
    );
};

export default PrivateRoute;