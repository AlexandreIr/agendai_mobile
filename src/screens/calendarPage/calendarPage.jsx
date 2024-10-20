import { FlatList, Text, View } from "react-native"
import styles from "./calendarPage.style"
import { mock } from "./mock"
import AppointmentBox from "../../components/appointmentBox/appointmentBox"

function CalendarPage() {
  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>Minhas reservas</Text>
        <View style={styles.appointmentContainer}>
            <FlatList
                data={mock}
                showsVerticalScrollIndicator={false}
                keyExtractor={(app)=>app.id_appointment}
                renderItem={({item})=>{
                    return(
                        <AppointmentBox 
                            doctor={item.doctor} 
                            service={item.service} 
                            specialty={item.specialty}
                            booking_date={item.booking_date}
                            booking_hour={item.booking_hour}/>
                    )
               }}
            />

        </View>
    </View>
  )
}

export default CalendarPage