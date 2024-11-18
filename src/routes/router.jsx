import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BrandLayout from "../layouts/BrandLayout";
import BrandDetails from "../components/BrandDetails/BrandDetails";

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
        element: <BrandDetails></BrandDetails>
    }
  ]);

export default router;