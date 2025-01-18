import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import DownloadApp from "../Pages/Shared/DownloadApp";


const MainLayout = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <DownloadApp></DownloadApp>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;