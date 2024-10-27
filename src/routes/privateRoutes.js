import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main/main";
import Schedule from "../screens/schedule/schedule";
import ServicePage from "../screens/servicePage/servicePage";

const Stack = createNativeStackNavigator();


function PrivateRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={Main} options={{headerShown:false}}/>
            <Stack.Screen name="schedule" component={Schedule}/>
            <Stack.Screen name="services" component={ServicePage}/>
        </Stack.Navigator>
    )
}

export default PrivateRoutes;