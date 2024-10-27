import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main/main";
import Schedule from "../screens/schedule/schedule";
import ServicePage from "../screens/servicePage/servicePage";
import { COLORS } from "../constants/theme";

const Stack = createNativeStackNavigator();


function PrivateRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={Main} options={{headerShown:false}}/>
            <Stack.Screen name="schedule" component={Schedule} options={{
                headerTitle:"Fazer uma reserva",
                headerTitleAlign:'center',
                headerTintColor:COLORS.blue,
                headerShadowVisible:false,
            }}/>
            <Stack.Screen name="services" component={ServicePage} options={{
                headerTitle:"Serviços",
                headerTitleAlign:'center',
                headerTintColor:'white',
                headerShadowVisible:false,
                headerStyle:{
                    backgroundColor:COLORS.blue,
                }
            }}/>
        </Stack.Navigator>
    )
}

export default PrivateRoutes;