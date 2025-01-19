import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png';

const Sidebar = () => {
    return (
        
            <div className="w-[280px] border-r-2 bg-[#fef5ee] text-center">
                <div>
                    <Link to={'/'} className="">
                        <h2 className="font-bold text-xl flex items-center justify-center gap-2 py-2 shadow-xl mb-7"><img src={logo} className="w-12" alt="" />OMED</h2>
                    </Link>
                </div>
               <NavLink to={'/dashboard'} className="btn flex justify-center items-center text-base">Statistics</NavLink>
               <NavLink to={'/dashboard/add-medicine'} className="btn flex justify-center items-center text-base">Add Medicine</NavLink>
           
            </div>
    );
};

export default Sidebar;