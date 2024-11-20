import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const BrandDetails = () => {
    const params = useParams();
    const brands = useLoaderData();
    // console.log(brands['coupons']);
    // console.log(brands.coupons[0]);
    
    return (
        <div>
          <Helmet>
            <title>Discount PRO/BrandDetails</title>
          </Helmet>
          <nav className="py-4">
          <Navbar></Navbar>
          </nav>
          <h2>brand Details page</h2>
            
        </div>
    );
};

export default BrandDetails;