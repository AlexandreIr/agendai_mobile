import { FlatList, Text, View } from "react-native"
import styles from "./calendarPage.style"
import { mock } from "./mock"
import AppointmentBox from "../../components/appointmentBox/appointmentBox"
import api from "../../constants/api";
import { useEffect, useState } from "react";

function CalendarPage() {
  const [appointmens, setAppointments] = useState([]);

  const getAppointment = async () => {
    const response = await api.get("/appointments");
    setAppointments(response.data);
  };

  useEffect(() => {
    getAppointment();
  }, [appointmens]);

  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>Minhas reservas</Text>
        <View style={styles.appointmentContainer}>
            <FlatList
                data={appointmens}
                showsVerticalScrollIndicator={false}
                keyExtractor={(app)=>app.id_appointment}
                renderItem={({item})=>{
                    return(
                        <AppointmentBox 
                            id_appointment = {item.id_appointment}
                            doctor={item.doctor} 
                            service={item.service} 
                            specialty={item.specialty}
                            booking_date={item.booking_date.slice(0,10)}
                            booking_hour={item.booking_hour}/>
                    )
               }}
            />

        </View>
    </View>
  )
}

export default CalendarPage