
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
import CheckOut from "../Pages/CheckOut";
import Shop from "../Pages/Shop";
import AddCategory from "../Pages/AddCategory";
import CategoryItems from "../Pages/CategoryItems";
import ManageCategory from "../Dashboard/ManageCategory";
import Advertisement from "../Dashboard/Advertisement";


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
              element: <UpdateUserInfo></UpdateUserInfo>
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
            {
              index: true,
              element:<PrivateRoute>
                <Statistics></Statistics>
              </PrivateRoute>
            },
            {
              path: 'add-medicine',
              element: <PrivateRoute>
                <AddMedicine></AddMedicine>
              </PrivateRoute>
            },
            {
              path: 'add-category',
              element: <PrivateRoute>
                <AddCategory></AddCategory>
              </PrivateRoute>
            },
            {
              path: 'manage-category',
              element: <PrivateRoute>
                <ManageCategory></ManageCategory>
              </PrivateRoute>
            },
            {
              path: 'advertisement',
              element: <PrivateRoute>
                <Advertisement></Advertisement>
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


