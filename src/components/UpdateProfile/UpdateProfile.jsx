import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateProfile(auth.currentUser, profile)
        .then(()=>{
            
            navigate('/profile');
        })
        .catch(error => console.log(error.message));
    }

    return (
        <div className="w-11/12 mx-auto bg-base-200 p-32">
            <h2 className="text-center text-2xl font-bold mt-5">Update Profile</h2>
            <form onSubmit={handleSubmit} className="w-5/12 mx-auto" action="">
            <div className="form-control">
              <label className="label">
              <span className="label-text">Name</span>
               </label>
              <input type="text" name="name" placeholder="name" className="input input-bordered" required />
             </div>
            <div className="form-control">
              <label className="label">
              <span className="label-text">Photo-Url</span>
               </label>
              <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
             </div>
            <button className="btn bg-neutral text-white mt-3">Update Information</button>
            </form>
        </div>
    );
};

export default UpdateProfile;