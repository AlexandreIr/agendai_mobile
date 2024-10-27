import { FlatList, Text, View } from "react-native";
import styles from "./homePage.style";
import { mock } from "./mock";
import DoctorBox from "../../components/doctorBox/doctorBox";

function HomePage(props) {

  const ClickDoctor = (id_doctor,doctorName, gender, doctorSpeciality) => {
    props.navigation.navigate('services');
  }


  return (
    <View style={styles.container}>
        <View style={styles.doctorContainer}>
            <Text style={styles.titleText}>Agende seu médico agora mesmo</Text>
            <FlatList 
                data={mock}
                keyExtractor={(doc)=> doc.name}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>{
                    return(<DoctorBox 
                        id_doctor={item.id_doctor}
                        doctorName={item.name} 
                        gender={item.gender} 
                        doctorSpeciality={item.speciality}
                        onPress={ClickDoctor}
                        />)
                }}
            />
        </View>
    </View>
  )
}

export default HomePage