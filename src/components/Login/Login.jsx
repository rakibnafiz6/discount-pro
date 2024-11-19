import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const {signUpUser, signInGoogle, user} = useContext(AuthContext);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
 const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signUpUser(email, password)
    .then((result)=>{
        console.log(result.user);
    navigate('/');
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


    return (
        <div>
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
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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