import { useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
    const params = useParams();
    const brand = useLoaderData();
    console.log(brand, params);
    
    return (
        <div>
          <h2>brand Details page</h2>
            {/* <h2>{brand.brand_name}</h2>
           {
            brand.coupons.map((coupon, idx)=> <div key={idx} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{coupon.brand_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>)
           } */}
        </div>
    );
};

export default BrandDetails;