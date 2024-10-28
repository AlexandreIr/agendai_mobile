import { FlatList, Image, Text, View } from "react-native";
import { mock } from "./mock";
import Services from "../../components/services/services";
import { styles } from "./servicePage.style";
import { Female, Male } from "../../constants/icons";
import api from "../../constants/api";
import { useEffect, useState } from "react";


function ServicePage(props) {
    const {id_doctor, doctorName, icon, doctorSpeciality} = props.route.params;
    const [services, setServices] = useState([]);

    const loadServices = async() => {
        try {
            const response = await api.get(`/doctors/${id_doctor}/services`);
            if(response.data){
                setServices(response.data);
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    const ClickService = (id_service) => {
        props.navigation.navigate('schedule', {
            id_doctor,
            id_service,
        });
    }

    useEffect(() => {
        loadServices();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image source={icon=='male'?Male:Female} style={{width:100, height:100, marginBottom:10}} />
                <Text style={[styles.bannerText, styles.bannerTitle]}>{doctorName}</Text>
                <Text style={styles.bannerText}>{doctorSpeciality}</Text>
            </View>
            <FlatList 
            data={services}
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