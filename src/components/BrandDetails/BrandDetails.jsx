import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const BrandDetails = () => {
    const params = useParams();
    const brands = useLoaderData();
    // console.log(brands['coupons']);
    // console.log(brands.coupons[0]);
    
    return (
        <div>
          <nav className="py-4">
          <Navbar></Navbar>
          </nav>
          <h2>brand Details page</h2>
            
        </div>
    );
};

export default BrandDetails;