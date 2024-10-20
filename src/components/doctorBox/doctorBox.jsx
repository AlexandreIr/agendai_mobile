import { Image, Text, View } from "react-native"
import { Female, Male } from "../../constants/icons"
import styles from "./doctorBox.style";

function DoctorBox({gender, doctorName, doctorSpeciality}) {
  return (
    <View style={styles.container}>
        <Image source={gender=='male'?Male:Female}/>
        <View style={styles.textContainer}>
            <Text>{gender=='male'?'Dr. ':'Dra. '}{doctorName}</Text>
            <Text style={styles.doctorSpec}>{doctorSpeciality}</Text>
        </View>
    </View>
  )
}

export default DoctorBox