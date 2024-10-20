import { Image, Text, View } from 'react-native'
import { styles } from './appointmentBox.style'
import { Calendar, Clock } from '../../constants/icons'
import Button from '../button/button'

function AppointmentBox({service, doctor, specialty, booking_date, booking_hour}) {
  return (
       <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.serviceDoctorText}>{service} - {doctor}</Text>
                <Text style={styles.specialityText}>{specialty}</Text>
            </View>
            <View style={styles.dateHourContainer}>
                <Image source={Calendar} style={styles.icons}/> 
                <Text style={styles.booking}>{booking_date}</Text>
            </View>
            <View style={styles.dateHourContainer}>
                <Image source={Clock} style={styles.icons}/>
                <Text style={styles.booking}>{booking_hour}h</Text>
            </View>
            <View style={styles.btnComponent}>
                <Button text='Cancelar reserva' theme='danger'/>
            </View>
        </View>
 )
}

export default AppointmentBox