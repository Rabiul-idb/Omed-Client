import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png';
import useCart from "../Hooks/useCart";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";

const Sidebar = () => {

    const [myCarts] = useCart();
    const [isAdmin] = useAdmin();
    const [isSeller] = useSeller();
    // console.log(isSeller)
    // console.log(isAdmin)
    
    return (
        
        <div className="min-w-fit px-3 border-r-2 bg-[#fef5ee] ">
            <div>
                <Link to={'/'} className="">
                    <h2 className="font-bold text-xl flex items-center justify-center gap-2 py-2 shadow-xl mb-7"><img src={logo} className="w-12" alt="" />OMED</h2>
                </Link>
            </div>

            <div className="w-fit mb-5">
                
                {/* admin routes for everyone ====================================== */}
            {
                isAdmin && <>
                    <NavLink to={'/dashboard/admin-home'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Admin Home</NavLink>
                    <NavLink to={'/dashboard/manage-users'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Manage Users</NavLink>
                    <NavLink to={'/dashboard/manage-category'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Manage Category</NavLink>
                    <NavLink to={'/dashboard/manage-advertisement'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Manage Advertisement</NavLink>
                </>
            }


            {/* seller routes for everyone ====================================== */}
            
            {
                isSeller && <>
                    <NavLink to={'/dashboard/seller-home'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Seller Home</NavLink>
                    <NavLink to={'/dashboard/manage-medicine'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Manage Medicine</NavLink>
                    <NavLink to={'/dashboard/advertisement'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Request Advertise</NavLink>
                </>

            }

    
            {/* common routes for customer / everyone ====================================== */}
            <div className="">
            
                <NavLink to={'/dashboard/customer-home'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Customer Home</NavLink>
                <NavLink to={'/dashboard/Cart'} className="btn btn-sm mb-2 flex justify-center items-center text-base">My Carts ({myCarts.length})</NavLink>
                <NavLink to={'/'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Home</NavLink>
                <NavLink to={'/shop'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Shop</NavLink>
                <NavLink to={'/about'} className="btn btn-sm mb-2 flex justify-center items-center text-base">About Us</NavLink>
                <NavLink to={'/updateUserInfo'} className="btn btn-sm mb-2 flex justify-center items-center text-base">Update Profile</NavLink>
            </div>
            </div>

        
        </div>
    );
};

export default Sidebar;