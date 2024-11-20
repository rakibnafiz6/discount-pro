import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const { pathname } = useLocation();
    if (pathname === '/profile') {
        toast("Welcome to PrivateRoute", {
            position: 'top-center',

        });
    }
    return (
        <div>
            <nav className="py-4">
                <Navbar></Navbar>
            </nav>
            <div className="card bg-base-100 w-96 shadow-xl ml-40 mt-16">
                <figure>
                    <img
                        src={user?.photoURL}
                        alt="USER photo" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">User Name: {user?.displayName}</h2>
                    <p>User Email: {user?.email}</p>
                
                </div>
            </div>
            {/* <div>
                <img src={user?.photoURL} alt="" />
                <h2>{user?.displayName}</h2>
                <p>{user?.email}</p>
            </div> */}
        </div>
    );
};

export default MyProfile;