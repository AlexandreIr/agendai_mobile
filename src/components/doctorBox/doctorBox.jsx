import { Image, Text, TouchableOpacity, View } from "react-native"
import { Female, Male } from "../../constants/icons"
import styles from "./doctorBox.style";

function DoctorBox({id_doctor,gender, doctorName, doctorSpeciality, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>onPress(id_doctor,doctorName, gender, doctorSpeciality)}>
        <Image source={gender=='male'?Male:Female}/>
        <View style={styles.textContainer}>
            <Text>{gender=='male'?'Dr. ':'Dra. '}{doctorName}</Text>
            <Text style={styles.doctorSpec}>{doctorSpeciality}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default DoctorBox