import { Image, Text, TouchableOpacity, View } from "react-native"
import { Female, Male } from "../../constants/icons"
import styles from "./doctorBox.style";

function DoctorBox({id_doctor,icon, doctorName, doctorSpeciality, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>onPress(id_doctor,doctorName, icon, doctorSpeciality)}>
        <Image source={icon=='male'?Male:Female}/>
        <View style={styles.textContainer}>
            <Text>{doctorName}</Text>
            <Text style={styles.doctorSpec}>{doctorSpeciality}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default DoctorBox