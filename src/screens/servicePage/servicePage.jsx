import { FlatList, Image, Text, View } from "react-native";
import { mock } from "./mock";
import Services from "../../components/services/services";
import { styles } from "./servicePage.style";
import {mock as DoctorInfo} from '../homePage/mock';
import { Male } from "../../constants/icons";

 function ServicePage() {
  return (
    <View style={styles.container}>
        <View style={styles.banner}>
            <Image source={Male} style={{width:100, height:100, marginBottom:10}} />
            <Text style={[styles.bannerText, styles.bannerTitle]}>Alexandre Fernandes</Text>
            <Text style={styles.bannerText}>Cardiologista</Text>
        </View>
        <FlatList 
        data={mock}
        showsVerticalScrollIndicator= {false}
        keyExtractor={(service)=>service.id_service}
        renderItem={({item})=>{
            return(
                <Services 
                description={item.description}
                price={item.price}/>
            )
        }}
        />
    </View>
  )
}

export default ServicePage;