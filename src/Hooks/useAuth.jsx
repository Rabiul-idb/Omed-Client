import { useContext } from "react";
import { contextApi } from "../AuthContex/AuthContext";


const useAuth = () => {

    const auth = useContext(contextApi);
    return auth;
};

export default useAuth;