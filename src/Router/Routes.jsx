
import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


export  const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
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
            }
          ]
        },
      ]);


