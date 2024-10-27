import { useContext } from "react";
import AuthRoutes from "./authRoutes";
import PrivateRoutes from "./privateRoutes";
import { AuthContext } from "../contexts/authContext";

function Routes(){
    const {user} = useContext(AuthContext);
    
    return user.id_user 
    ? <PrivateRoutes /> 
    : <AuthRoutes />
}

export default Routes;