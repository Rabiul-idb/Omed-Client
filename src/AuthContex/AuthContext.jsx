import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.init";
import { children, createContext, useEffect, useState } from "react";
import axios from "axios";

const auth = getAuth(app);

export const contextApi = createContext();


const AuthContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

 
    
      // Observer
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
      

        if(currentUser?.email){
            setUser(currentUser);
        }

       setLoading(false)
        
    })
    return unSubscribe;
   },[])

 
  
  // create a new user
  const createNewUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
   

   // logOut
   const logOut = () =>{
    setLoading(true);
    return signOut(auth);
   }

     // login
   const userLogin = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   // login with google
   const provider = new GoogleAuthProvider();

   const loginWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, provider)
   }


    const authInfo = {
        auth,
        user,
        setUser,
        createNewUser,
        userLogin,
        loginWithGoogle,
        logOut,
        loading,
        setLoading,
    }


    return (
       <contextApi.Provider value={authInfo}>{children}</contextApi.Provider>
    );
};

export default AuthContext;