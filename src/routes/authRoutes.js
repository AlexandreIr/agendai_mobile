import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/loginPage/loginPage";
import AccountPage from "../screens/accountPage/accountPage";

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginPage} options={{headerShown:false}}/>
            <Stack.Screen name="register" component={AccountPage} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default AuthRoutes;