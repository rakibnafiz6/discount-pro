import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const BrandDetails = () => {
  const [coupons, setCoupons] = useState([]);
    const {id} = useParams();
    const brands = useLoaderData();
    const data = [];
    const singleBrand = brands.find(brand => brand._id === id);
    data.push(singleBrand);

    useEffect(()=>{
     fetch('/singleCoupon.json')
     .then(res => res.json())
     .then(data => {
      const singleCoupon = [];
      const find = data.find(d=> d.id === id);
      singleCoupon.push(find);
      setCoupons(singleCoupon);
     })
      
      
    }, [])

    const handleCopy = ()=>{
      toast.success("Coupon code copied successfully!", {
        position: "top-center",
        theme: "colored"
      });
    }
    
    return (
        <div className="">
           <h2>brand Details page </h2>
          <Helmet>
            <title>Discount PRO/BrandDetails</title>
          </Helmet>
          <nav className="py-4">
          <Navbar></Navbar>
          </nav>
         <div className="mb-20 md:w-5/12 mx-auto">
          {
            data.map(card => <div key={card._id} className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body flex-row">
                <img className="w-14 h-14 rounded-full" src={card.brand_logo} />
               <div>
               <h2 className="text-sm font-bold">Brand Name: {card.brand_name}</h2>
               <p className="text-base text-gray-500">Rating: {card.rating}</p>
               </div>
              </div>
           {
            coupons.map((coupon, idx) => <div key={idx} className="card bg-base-100  w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Code: {coupon.coupon_code}</h2>
              <p className="">Description: {coupon.description}</p>
              <p>Expiary Date: {coupon.expiry_date}</p>
              <p>Condition: {coupon.condition}</p>
              <p>coupon Type: {coupon.coupon_type}</p>
            </div>
           <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
           <button className="btn mb-3 ml-24 bg-neutral text-white w-48">Copy Code</button>
           </CopyToClipboard>
           <button className="btn mb-3 ml-24 bg-neutral text-white w-48"><Link>Use Now</Link></button>
          </div>)
           }
            </div>)
          }
         </div>
          <Footer></Footer>
        </div>
    );
};

export default BrandDetails;