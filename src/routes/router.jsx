import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BrandLayout from "../layouts/BrandLayout";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyProfile from "../components/MyProfile/MyProfile";
import PrivateRoutes from "../components/privateRoutes/PrivateRoutes";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      loader: ()=> fetch('/coupon.json')
    },
    {
        path: "/brands",
        element: <BrandLayout></BrandLayout>,
        loader: ()=> fetch('/coupon.json')
    },
    {
        path: '/brand/:id',
        element: <PrivateRoutes>
          <BrandDetails></BrandDetails>
        </PrivateRoutes>,
        loader: ()=> fetch('/coupon.json')
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
      path: '/profile',
      element: <PrivateRoutes>
        <MyProfile></MyProfile>
        </PrivateRoutes>
      
    },
    {
      path: '/updateProfile',
      element: <UpdateProfile></UpdateProfile>
    },
    {
      path: '/forgotPassword',
      element: <ForgotPassword></ForgotPassword>
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

export default router;