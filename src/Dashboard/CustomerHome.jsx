import { Helmet } from "react-helmet-async";


const CustomerHome = () => {
    return (
        <div>

            <Helmet>
                <title>OMED - Online Medicine | Customer Home</title>
            </Helmet>

            <h1 className="font font-semibold lg:text-2xl text-xl text-center mb-5">Welcome to custome home page</h1>
            <p className="text-red-600">This page is under Construction </p>
        </div>
    );
};

export default CustomerHome;