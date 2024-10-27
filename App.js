import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./src/screens/loginPage/loginPage";
import Main from "./src/screens/main/main";
import Schedule from "./src/screens/schedule/schedule";
import ServicePage from "./src/screens/servicePage/servicePage";
import Routes from "./src/routes/routes";


export default function App() {
 
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
      // {/* <ServicePage/> */}
      // {/* <Schedule/> */}
      // {/* <LoginPage/> */}
  );
}


