import { Alert, Image, Text, View } from 'react-native'
import { styles } from './appointmentBox.style'
import { Calendar, Clock } from '../../constants/icons'
import Button from '../button/button'
import api from '../../constants/api'
import moment from 'moment'

function AppointmentBox({id_appointment,service, doctor, specialty, booking_date, booking_hour}) {

const deleteAppointment = async () => {
    Alert.alert(
        'Confirmação',
        'Você tem certeza que deseja cancelar o agendamento?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        const response = await api.delete(`/appointments/${id_appointment}`);
                        if (response.data) {
                            Alert.alert('Agendamento cancelado com sucesso!');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        ],
        { cancelable: false }
    );
};


  return (
       <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.serviceDoctorText}>{service} - {doctor}</Text>
                <Text style={styles.specialityText}>{specialty}</Text>
            </View>
            <View style={styles.dateHourContainer}>
                <Image source={Calendar} style={styles.icons}/> 
                <Text style={styles.booking}>{moment(booking_date).format('DD/MM/YYYY')}</Text>
            </View>
            <View style={styles.dateHourContainer}>
                <Image source={Clock} style={styles.icons}/>
                <Text style={styles.booking}>{booking_hour}</Text>
            </View>
            <View style={styles.btnComponent}>
                <Button text='Cancelar reserva' theme='danger' onClick={deleteAppointment}/>
            </View>
        </View>
 )
}

export default AppointmentBox