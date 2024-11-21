import { sendPasswordResetEmail } from "firebase/auth";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const {state} = useLocation();
    const emailRef = useRef();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);
        sendPasswordResetEmail(auth, email)
    .then(()=>{
        toast.success('Reset email sent, Please check your email',{
            position: "top-center",
            theme: "colored"
        });
       window.location.href =('https://mail.google.com/mail/u/0/#inbox/FMfcgzQXKNBsKNJhlTnnWDkWQgwMszMV');
    })
    .catch(error => toast.error(error.message,{
        position: "top-center",
        theme: "colored"
    }));
    }

    return (
        <div className="w-11/12 mx-auto bg-base-200 p-32">
            <h2 className="text-center text-2xl font-bold mt-5">Forgot Password</h2>
            <form onSubmit={handleSubmit} className="w-5/12 mx-auto" action="">
            <div className="form-control">
              <label className="label">
              <span className="label-text">Email</span>
               </label>
              <input type="email"  value={state} name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
             </div>
           
            <button  className="btn bg-neutral text-white mt-3">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;