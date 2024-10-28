import { FlatList, Text, View } from "react-native";
import styles from "./homePage.style";
import { mock } from "./mock";
import DoctorBox from "../../components/doctorBox/doctorBox";
import { useContext, useEffect, useState } from "react";
import api from "../../constants/api";
import { AuthContext } from "../../contexts/authContext";

function HomePage(props) {
  const [doctors, setDoctors] = useState([]);

  const ClickDoctor = (id_doctor,doctorName, icon, doctorSpeciality) => {
    props.navigation.navigate('services', 
      {id_doctor,
      doctorName, 
      icon, 
      doctorSpeciality
    });
  }

  const getDoctors = async()=> {
    try{
      const response = await api.get('/doctors');
      if(response.data) {
        setDoctors(response.data);
      }
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => { 
    getDoctors();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.doctorContainer}>
            <Text style={styles.titleText}>Agende seu médico agora mesmo</Text>
            <FlatList 
                data={doctors}
                keyExtractor={(doc)=> doc.name}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>{
                    return(<DoctorBox 
                        id_doctor={item.id_doctor}
                        doctorName={item.name} 
                        icon={item.icon} 
                        doctorSpeciality={item.specialty}
                        onPress={ClickDoctor}
                        />)
                }}
            />
        </View>
    </View>
  )
}

export default HomePage