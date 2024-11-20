import { useContext, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import Navbar from "../Navbar/Navbar";
import auth from "../../firebase/firebase.init";


const Login = () => {
    const {signUpUser, signInGoogle,} = useContext(AuthContext);
    const emailRef = useRef();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
 const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signUpUser(email, password)
    .then((result)=>{
        console.log(result.user);
    navigate('/');
    toast('Welcome to your project',{
        position: "top-center"
    });
    })
    .catch((error)=>{
        console.log(error.message);
        toast.error("user can't login! Please try again.", {
            position: "top-center",
            theme: "colored"
        });
    })
 }

 const handleGoogle = ()=>{
    signInGoogle(provider)
    .then((result)=>{
        console.log(result.user);
        navigate('/');
    })
    .catch((error)=>{
        console.log(error.message);
    })
 }

 const handleForgetPassword = ()=>{
    
    console.log('forget password', emailRef.current);
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
    .then(()=>{
        toast.success('Reset email sent, Please check your email',{
            position: "top-center",
            theme: "colored"
        });
    })
    .catch(error => toast.error(error.message,{
        position: "top-center",
        theme: "colored"
    }));
 }


    return (
        <div>
        <nav className="py-4 bg-base-200">
            <Navbar></Navbar>
        </nav>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Login now!</h1>
                       
                    </div>
                    <div className="card bg-base-100 w-[400px] shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label onClick={handleForgetPassword} className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-neutral text-white">Login</button>
                                <button onClick={handleGoogle} className="btn bg-neutral text-white">Login With Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;