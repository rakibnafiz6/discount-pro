import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div>
                <img src={user.photoURL} alt="" />
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default MyProfile;