import { Alert, FlatList, Image, Text, View } from "react-native";
import { mock } from "./mock";
import Services from "../../components/services/services";
import { styles } from "./servicePage.style";
import {mock as DoctorInfo} from '../homePage/mock';
import { Female, Male } from "../../constants/icons";


function ServicePage(props) {

    const {id_doctor, doctorName, gender, doctorSpeciality} = props.route.params;
    const ClickService = (id_service) => {
        console.log(id_service);
        props.navigation.navigate('schedule', {
            id_doctor,
            id_service,
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image source={gender=='male'?Male:Female} style={{width:100, height:100, marginBottom:10}} />
                <Text style={[styles.bannerText, styles.bannerTitle]}>{gender=='male'?'Dr. ':'Dra. '}{doctorName}</Text>
                <Text style={styles.bannerText}>{doctorSpeciality}</Text>
            </View>
            <FlatList 
            data={mock}
            showsVerticalScrollIndicator= {false}
            keyExtractor={(service)=>service.id_service}
            renderItem={({item})=>{
                return(
                    <Services 
                    id_service={item.id_service}
                    description={item.description}
                    price={item.price}
                    onPress={ClickService}
                    />
                )
            }}
            />
        </View>
    )
}

export default ServicePage;