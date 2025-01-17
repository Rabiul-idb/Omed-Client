
import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateUserInfo from "../Pages/UpdateUserInfo";
import Error from "../Pages/Error";


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
            }
          ]
        },
      ]);


