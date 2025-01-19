import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";


const DashboardLayout = () => {
    return (
        <div className=" max-w-[1920px] min-h-screen md:flex ">
           <Sidebar></Sidebar>
           
           <div className="flex-1">
                <div className="p-5">
                    <Outlet></Outlet>
                </div>
           </div>
        </div>
    );
};

export default DashboardLayout;