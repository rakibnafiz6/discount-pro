import { FaStar } from "react-icons/fa6";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const BrandCard = () => {
    const BrandCard = useLoaderData();
    const {pathname} = useLocation();

    return (
        <div className="w-9/12 mx-auto">
            {
                BrandCard.map(card => <div key={card._id} className="card card-compact bg-base-100  shadow-xl p-7 md:w-[700px] mb-10">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <h2 className="flex justify-center mt-2 font-bold">{pathname}</h2>
                    <div className="flex items-center">
                        <div className="">
                            <img className="w-15 h-15 rounded-full" src={card.brand_logo} alt="" />
                            <h2 className="font-semibold ml-8 mt-2">{card.brand_name}</h2>
                           <div className="flex items-center gap-2">
                           <span className="text-yellow-300 font-bold ml-8"><FaStar /></span>
                           <p className="mt-2">{card.rating}</p>
                           </div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">{card.brand_name}</h2>
                            <p>{card.description}</p>
                        </div>
                    </div>
                    {
                    card.isSaleOn && <div className="card-actions items-center mt-6">
                    <Link to={`/brand/${card._id}`}><button className="btn btn-primary">View Coupons</button></Link>
                    <div className="badge badge-secondary">Sale is On!</div>
                     </div>
                    }
                </div>)
            }
                    

        </div>
    );
};

export default BrandCard;