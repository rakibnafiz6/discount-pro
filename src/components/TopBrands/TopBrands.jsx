import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import './TopBrands.css';
import 'animate.css';

const TopBrands = () => {
    return (
        <div className="">
 
            <h2 className="animate__animated animate__swing text-center font-bold text-2xl mb-4">Exclusive Deals and Discounts</h2>
            <div className="flex flex-col lg:flex-row gap-6">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">TechDeals</h2>
                    <li className="list-disc text-gray-500 text-base font-semibold">Rating: ⭐ 4.5</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Category: Electronics</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Description: Unbeatable discounts on gadgets and electronics for tech enthusiasts.</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Coupon: TECH20 - Save 20% (Min purchase $100)</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Shop Now: <Link className="">Visit TechDeals</Link></li>
                    
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">FashionFrenzy</h2>
                    <li className="list-disc text-gray-500 text-base font-semibold">Rating: ⭐ 4.8</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Category: Clothing</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Description: Stay trendy with exclusive discounts on stylish apparel.</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Coupon: STYLE10 - Get 10% off for first-time users</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Shop Now: Visit FashionFrenzy</li>
                    
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">GroceryGenius</h2>
                    <li className="list-disc text-gray-500 text-base font-semibold">Rating: ⭐ 4.7</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Category: Groceries</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Description: Fresh groceries and quality produce delivered to your doorstep.</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Coupon: FRESH10 - Save 10% (Min purchase $50)</li>
                    <li className="list-disc text-gray-500 text-base font-semibold">Shop Now: Visit GroceryGenius</li>
                    
                </div>
            </div>
            </div>
           <section className="mt-10 img">
           <Marquee pauseOnHover>
            <Link to={`/brand/${'1'}`}> <img className="mr-7" src="https://i.ibb.co.com/zSKLDn7/tech-deal-logo.webp" alt="" /></Link>
             <Link to={`/brand/${'2'}`}><img className="mr-7" src="https://i.ibb.co.com/Wc04vcJ/fachion.jpg" alt="" /></Link>
             <Link to={`/brand/${'3'}`}><img className="mr-7" src="https://i.ibb.co.com/JQVvDgd/images-kitchen.jpg" alt="" /></Link>
             <Link to={`/brand/${'4'}`}><img className="mr-7" src="https://i.ibb.co.com/H2v31L4/istockphoto-organic.jpg" alt="" /></Link>
             <Link to={`/brand/${'5'}`}><img className="mr-7" src="https://i.ibb.co.com/8jx9PmK/images-gear.png" alt="" /></Link>
            <Link to={`/brand/${'6'}`}> <img className="mr-7" src="https://i.ibb.co.com/41bB92m/image-goru.jpg" alt="" /></Link>
            </Marquee>
           </section>
        </div>
    );
};

export default TopBrands;