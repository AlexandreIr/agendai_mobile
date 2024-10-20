import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./homePage.style";
import { mock } from "./mock";
import DoctorBox from "../../components/doctorBox/doctorBox";
import { Logo } from "../../constants/icons";

function HomePage() {
  return (
    <View style={styles.container}>
        <View style={styles.doctorContainer}>
            <Text style={styles.titleText}>Agende seu médico agora mesmo</Text>
            <FlatList 
                data={mock}
                keyExtractor={(doc)=> doc.name}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>{
                    return(<DoctorBox doctorName={item.name} 
                        gender={item.gender} 
                        doctorSpeciality={item.speciality}/>)
                }}
            />
        </View>
    </View>
  )
}

export default HomePage