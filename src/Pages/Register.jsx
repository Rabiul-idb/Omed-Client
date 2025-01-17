import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { contextApi } from "../AuthContex/AuthContext";


const Register = () => {

     const {user, setUser, createNewUser} = useContext(contextApi);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const name = e.target.username.value;
        if(name.length < 5){
            setError('Name must be at least 5 characters');
            return;
        }
        const email = e.target.email.value;

        const password = e.target.password.value;
        if(password.length < 6){
            setPassError('Password must be at least 6 characters');
            return;
        }
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        if(!regex.test(password)){
            setPassError('Password must contain at least one uppercase letter, one lowercase letter, one digit , one special charecter')
            return;
        }   
        
        const photo = e.target.photo.value;

        //console.log(name, email, password, photo)

        createNewUser(email, password)
        .then(result => {
            const user = result.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            })
            setUser(user);
            Swal.fire({
                title: 'Success!',
                text: 'Congrates! Successfully Registered',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            navigate('/');
           // console.log(user)
        })
        .then(error =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
        })


    }

    return (
       
        <div className="border border-gray-500 rounded-2xl p-7 lg:w-5/12 md:w-8/12 w-10/12 mx-auto mt-12 mb-10 bg-cyan-50">
            <h2 className="font-bold md:text-2xl text-xl lg:text-3xl text-center">User Registration</h2>
            <hr className="my-3"/>
            <form 
             onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base">UserName</label><br></br>
                    <input placeholder="User name" required type="text" name="username" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                    <label>
                        {
                            error? (<p className="text-red-500 text-sm mt-1">{error}</p>) : " "
                        }
                    </label>
                </div>
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base relative">Password<br></br>
                        <input placeholder="Password" required type={!showPassword ? "password" : "text" } name="password" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                        <a onClick={() => setShowPassword(!showPassword)} className="btn btn-sm absolute right-2 top-9 text-base">{!showPassword ? <FaEyeSlash/> : <FaRegEye/>}</a> 
                    </label>
                    <label> 
                        {
                            passError ? (<p className="text-red-500 text-sm mt-1">{passError}</p>) : " "
                        }
                    </label>
                </div>
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base">Email</label><br></br>
                    <input placeholder="Email address" required type="email" name="email" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                </div>
                <div className="mb-5">
                    <label className="text-text-clr font-semibold text-base">User Photo</label><br></br>
                    <input placeholder="Photo url" required type="text" name="photo" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" />
                    
                </div>
                <button className="btn hover:bg-info bg-info text-white font-bold text-lg px-8 py-2 rounded-3xl border border-white block w-fit mx-auto">Register</button>
            </form>

            <p className="font-medium text-sm text-center mt-4">Already have an account?  <Link to={'/login'} className="text-info underline">Login here</Link></p>
            
            
        </div>
    );
};

export default Register;