import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "../homePage/homePage";
import CalendarPage from "../calendarPage/calendarPage";
import ProfilePage from "../profilePage/profilePage";
import { Image } from "react-native";
import { Calendar, Home, Logo, Profile } from "../../constants/icons";


const Tab = createBottomTabNavigator();

function Main() {
  return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomePage} options={{
                headerTitleAlign:'center',
                headerTitle: ()=>{
                    return (<Image source={Logo} 
                        style={{width:125, height:29}}/>)
                },
                tabBarShowLabel:false,
                tabBarIcon:({focused})=>{
                    return(<Image source={Home} 
                        style={{
                            width:30, 
                            height:30, 
                            opacity:focused?1:.4
                        }}/>)
                }
            }}/> 
            <Tab.Screen name='Calendar' component={CalendarPage} options={{
                headerTitleAlign:'center',
                headerTitle: ()=>{
                    return (<Image source={Logo} 
                        style={{width:125, height:29}}/>)
                },
                tabBarShowLabel:false,
                tabBarIcon:({focused})=>{
                    return(<Image source={Calendar} 
                        style={{
                            width:30, 
                            height:30,
                            opacity:focused?1:.4
                        }}/>)
                }
            }}/> 
            <Tab.Screen name='Profile' component={ProfilePage} options={{
                headerTitleAlign:'center',
                headerTitle: ()=>{
                    return (<Image source={Logo} 
                        style={{width:125, height:29}}/>)
                },
                tabBarShowLabel:false,
                tabBarIcon:({focused})=>{
                    return(<Image source={Profile} 
                        style={{
                            width:30, 
                            height:30,
                            opacity:focused?1:.4
                        }}/>)
                }
            }}/> 
        </Tab.Navigator>
  )
}

export default Main