import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { contextApi } from "../AuthContex/AuthContext";
import axios from "axios";
import { imgUpload } from "../api/utils";
import { FaSpinner } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Register = () => {

     const {auth, user, setUser, createNewUser, loading , setLoading} = useContext(contextApi);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');
    const navigate = useNavigate();

    

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Clear previous errors
        setError('');
        setPassError('');
      
        const name = e.target.username.value;
        if (name.length < 5) {
          setError('Name must be at least 5 characters');
          return;
        }
      
        const email = e.target.email.value;
      
        const password = e.target.password.value;
        if (password.length < 6) {
          setPassError('Password must be at least 6 characters');
          return;
        }
      
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        if (!regex.test(password)) {
          setPassError(
            'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
          );
          return;
        }
      
        const photo = e.target.photo.files[0];
        let img_url = '';
      
        try {
          // Upload image to imgbb
          img_url = await imgUpload(photo);
      
          if (!img_url) {
            setError('Failed to upload image. Please try again.');
            return;
          }
          console.log('Image URL:', img_url);
        } catch (error) {
          console.error('Error uploading image:', error);
          setError('Image upload failed. Please try again.');
          return;
        }
      
        try {
          // Create a new user
          const result = await createNewUser(email, password);
          const user = result.user;

          // send userInfo to db
          const userInfo = {
            name: name,
            email: user.email,
            photo: img_url,
          }
          await axios.post(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, userInfo);

          // Update user profile
          await updateProfile(user, {
            displayName: name,
            photoURL: img_url,
          });
      
          console.log('Profile updated successfully!');
          setUser(user);
      
          Swal.fire({
            title: 'Success!',
            text: 'Congratulations! Successfully Registered',
            icon: 'success',
            confirmButtonText: 'OK',
          });
      
          navigate('/');
        } catch (error) {
          console.error('Error during registration:', error);
          setError('Registration failed. Please try again.');
        }
      };
      

    return (

      <div>
        <Helmet>
          <title>OMED - Online Medicine | Register</title>
        </Helmet>
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
                    {/* <input placeholder="Photo url" required type="text" name="photo" className="outline outline-gray-400 w-full h-11 rounded-lg px-5 mt-2" /> */}
                    <input type="file" name="photo" className=" w-full
                    h-11 rounded-lg px-2 mt-2" />
                    
                </div>
                <button className="btn hover:bg-info bg-info text-white font-bold text-lg px-8 py-2 rounded-3xl border border-white block w-fit mx-auto">
                    {/* {
                        loading ? <FaSpinner className="animate-spin inline-block w-5 h-5 text-white
                        "/> : "Register"
                    } */}
                    Register
                </button>
            </form>

            <p className="font-medium text-sm text-center mt-4">Already have an account?  <Link to={'/login'} className="text-info underline">Login here</Link></p>
            
            
        </div>

      </div>
       
    );
};

export default Register;