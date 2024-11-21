import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import Navbar from "../Navbar/Navbar";
import auth from "../../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { createUser, signInGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);


        if (password.length < 6) {
            setError('password at least 6 character');
            return;
        }
        const regEx = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
        if (!regEx.test(password)) {
            setError('At least one uppercase and one lowercase');
            return;
        }
        createUser(email, password)
            .then(() => {
                
                navigate('/');
                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        
                    })
                    .catch(error => console.log(error.message));
            })
            .catch(error => {
                
                toast.error(error.message, {
                    position: 'top-center',
                    theme: 'colored'
                })
            })
    }

    const handleGoogle = () => {
        signInGoogle(provider)
            .then(() => {
                
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div>
        <Helmet>
            <title>Discount PRO/Register</title>
        </Helmet>
            <nav className="py-4 bg-base-200">
                <Navbar></Navbar>
            </nav>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100  w-[400px] shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className=" input input-bordered" required />
                                <button onClick={() => setShowPassword(!showPassword)}
                                    className="btn btn-xs absolute right-2 top-12">
                                    {showPassword? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}
                                </button>
                                <p className="text-red-600">{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-neutral text-white">Register</button>
                                <button onClick={handleGoogle} className="btn bg-neutral text-white">Register With Google</button>
                            </div>
                        </form>
                        <p className="text-center pb-2">Already have an account please! <Link className="text-red-600" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;