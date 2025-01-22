import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png';
import useCart from "../Hooks/useCart";

const Sidebar = () => {

    const [myCarts] = useCart();
    
    return (
        
            <div className="w-[280px] border-r-2 bg-[#fef5ee] text-center ">
                <div>
                    <Link to={'/'} className="">
                        <h2 className="font-bold text-xl flex items-center justify-center gap-2 py-2 shadow-xl mb-7"><img src={logo} className="w-12" alt="" />OMED</h2>
                    </Link>
                </div>
                  {/* admin routes for everyone ====================================== */}

               <NavLink to={'/dashboard/statistics'} className="btn flex justify-center items-center text-base">Statistics</NavLink>
               
               <NavLink to={'/dashboard/manage-category'} className="btn flex justify-center items-center text-base">Manage Category</NavLink>
               <NavLink to={'/dashboard/manage-advertisement'} className="btn flex justify-center items-center text-base">Manage Advertisement</NavLink>
               {/* <NavLink to={'/dashboard/add-category'} className="btn flex justify-center items-center text-base">Add Category</NavLink> */}

                {/* seller routes for everyone ====================================== */}

               <NavLink to={'/dashboard/add-medicine'} className="btn flex justify-center items-center text-base">Add Medicine</NavLink>
               <NavLink to={'/dashboard/advertisement'} className="btn flex justify-center items-center text-base">Advertisement</NavLink>

                {/* user routes for everyone ====================================== */}
               <NavLink to={'/dashboard/Cart'} className="btn flex justify-center items-center text-base">My Carts ({myCarts.length})</NavLink>
        
      
       
        {/* common routes for everyone ====================================== */}
               <div>
                <NavLink to={'/'} className="btn flex justify-center items-center text-base">User Home</NavLink>
                <NavLink to={'/shop'} className="btn flex justify-center items-center text-base">Shop</NavLink>
                <NavLink to={'/updateUserInfo'} className="btn flex justify-center items-center text-base">Update Profile</NavLink>
                
               </div>
           
            </div>
    );
};

export default Sidebar;