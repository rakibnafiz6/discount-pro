import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const privateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default privateRoutes;