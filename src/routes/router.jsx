import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BrandLayout from "../layouts/BrandLayout";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyProfile from "../components/MyProfile/MyProfile";

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
        element: <BrandDetails></BrandDetails>,
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
      element: <privateRoutes>
        <MyProfile></MyProfile>
      </privateRoutes>
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

export default router;