

import { updateProfile } from "firebase/auth";
import useAuth from "../Hooks/useAuth";
import { imgUpload } from "../api/utils";
import { Helmet } from "react-helmet-async";



const UpdateUserInfo = () => {

    const {user, setUser, auth} = useAuth();
    const{displayName, photoURL} = user || {};
    //console.log(displayName, photoURL)
    
    const handleUpdate = async(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.files[0];
        let photo_url = '';
        //console.log(name, photo)

        // Upload image to imgbb
        photo_url = await imgUpload(photo);

        updateProfile (auth.currentUser, {
            displayName: name, photoURL: photo_url
        }).then(() => {
        setUser({...user, displayName: name, photoURL : photo_url});
        
        }).catch((error) => {
        console.log("error", error)
        // ...
        });
        
        e.target.reset();
    }
   


    return (
        <div className="hero bg-[#fef5ee] min-h-screen">

       <Helmet>
                   <title>OMED - Online Medicine | Update Profile</title>
             </Helmet>
    
  <div className="flex flex-col-reverse py-8 sm:flex-row lg:w-[70%] lg:grid grid-cols-2 gap-7 ">
    <div className="card bg-base-100 shadow-2xl">
      <h2 className="text-center font-semibold mt-5 text-2xl -mb-6">Update your Info</h2>
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Update name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="file" name="photo" placeholder="Update Photo url" className="input " required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-600 text-white text-lg hover:bg-red-700">Update</button>
        </div>
      </form>
    </div>

    <div className="text-center lg:text-left">
      <div>
        <img src={user?.photoURL} className="h-52 w-52 rounded-xl border mx-auto" alt="" />  
      </div>
      <p className="font-semibold text-lg text-black text-center mt-2">{user?.displayName}</p>
      <p className="font-semibold text-lg text-black text-center"> {user?.email}</p>
    </div>
  </div>
  
</div>
    );
};

export default UpdateUserInfo;