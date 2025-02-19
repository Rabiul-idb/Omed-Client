
import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateUserInfo from "../Pages/UpdateUserInfo";
import Error from "../Pages/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Statistics from "../Dashboard/Statistics";
import AddMedicine from "../Dashboard/AddMedicine";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import CheckOut from "../Dashboard/Payment/CheckOut";
import Shop from "../Pages/Shop";
import AddCategory from "../Pages/AddCategory";
import CategoryItems from "../Pages/CategoryItems";
import ManageCategory from "../Dashboard/ManageCategory";
import Advertisement from "../Dashboard/Advertisement";
import ManageAdvertise from "../Dashboard/Admin/ManageAdvertise";
import ManageUser from "../Dashboard/Admin/ManageUser";
import ManageMedicine from "../Dashboard/Seller/ManageMedicine";
import About from "../Pages/About";
import PrivateSeller from "../PrivateRoute/PrivateSeller";
import PrivateAdmin from "../PrivateRoute/PrivateAdmin";
import SellerHome from "../Dashboard/Seller/SellerHome";
import CustomerHome from "../Dashboard/CustomerHome";
import Contact from "../Pages/Contact";


export  const router = createBrowserRouter([

        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <Error></Error>,
          children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/medicines/:category',
                element: <CategoryItems></CategoryItems>,
            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/register',
              element: <Register></Register>
            },
            {
              path: '/updateUserInfo',
              element: <PrivateRoute>
                <UpdateUserInfo></UpdateUserInfo>
              </PrivateRoute>
            },
            {
              path: '/productDetails/:id',
              element: <ProductDetails></ProductDetails>
            }
          ]
        },

        // dashboard routes
        {
          path: "/dashboard",
          element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>,
          children: [
            //admin private Routes
            {
              path: 'admin-home',
              element:<PrivateAdmin>
                <Statistics></Statistics>
              </PrivateAdmin>
            },
            
            {
              path: 'add-category',  //this route is no needed
              element: <PrivateAdmin>
                <AddCategory></AddCategory>
              </PrivateAdmin>
            },
            {
              path: 'manage-users',
              element: <PrivateAdmin>
                <ManageUser></ManageUser> 
              </PrivateAdmin>
            },
            {
              path: 'manage-category',
              element: <PrivateAdmin>
                <ManageCategory></ManageCategory>
              </PrivateAdmin>
            },
            {
              path: 'manage-advertisement',
              element: <PrivateAdmin>
                <ManageAdvertise></ManageAdvertise>
              </PrivateAdmin>
            },

            //seller private route
            {
              path: 'seller-home',
              element: <PrivateSeller>
                <SellerHome></SellerHome>
              </PrivateSeller>
            },
            {
              path: 'manage-medicine',
              element: <PrivateSeller>
                <ManageMedicine></ManageMedicine>
              </PrivateSeller>
            },
            {
              path: 'advertisement',
              element: <PrivateSeller>
                <Advertisement></Advertisement>
              </PrivateSeller>
            },
            // for every one
            {
              path: 'customer-home',
              element: <PrivateRoute>
                <CustomerHome></CustomerHome>
              </PrivateRoute>
            },
            {
              path: 'cart',
              element: <PrivateRoute>
                <Cart></Cart>
              </PrivateRoute>
            },
            {
              path: 'checkOut',
              element: <PrivateRoute>
                <CheckOut></CheckOut>
              </PrivateRoute>
            },
          ]
        }
      ]);


