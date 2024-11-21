import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const { pathname } = useLocation();
    if (pathname === '/profile') {
        toast("Welcome to your profile", {
            position: 'top-center',

        });
    }
    return (
        <div>
            <Helmet>
                <title>Discount PRO/MyProfile</title>
            </Helmet>
            <nav className="py-4">
                <Navbar></Navbar>
            </nav>
            <div className="card bg-base-100 w-96 shadow-xl md:ml-40 mt-16">
                <figure>
                    <img
                        src={user?.photoURL}
                        alt="USER photo" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">User Name: {user?.displayName}</h2>
                    <p>User Email: {user?.email}</p>
                
                </div>
                <Link to='/updateProfile' className="btn bg-neutral text-white mb-2 mx-2">
                Update Profile
                </Link>
            </div>
            
        </div>
    );
};

export default MyProfile;