import AuthRoutes from "./authRoutes";
import PrivateRoutes from "./privateRoutes";

function Routes(){
    const user = {
        id_user: 1,
    }
    
    return user.id_user 
    ? <PrivateRoutes /> 
    : <AuthRoutes />
}

export default Routes;