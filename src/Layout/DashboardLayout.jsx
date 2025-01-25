import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Helmet>
           <title>OMED - Online Medicine | Dashboard</title>
      </Helmet>
      
      <div className=" min-h-screen md:flex ">
        <Sidebar></Sidebar>

        <div className="flex-1">
          <div className="p-7">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default DashboardLayout;
