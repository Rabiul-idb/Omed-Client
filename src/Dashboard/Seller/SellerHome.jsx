import { Helmet } from "react-helmet-async";


const SellerHome = () => {
    return (
        <div>
             <Helmet>
                <title>OMED - Online Medicine | Seller Home</title>
            </Helmet>
            <h1 className="font font-semibold lg:text-2xl text-xl text-center mb-5">Welcome to seller home page</h1>
            <p className="text-red-600">This page is under Construction. </p>
        </div>
    );
};

export default SellerHome;