import { Alert, Text, View } from "react-native";
import { styles } from "./schedule.style";
import { Calendar, LocaleConfig } from "react-native-calendars";

import { ptBR } from "../../constants/calendar";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";
import api from "../../constants/api";

LocaleConfig.locales['pt-BR'] = ptBR;
LocaleConfig.defaultLocale = 'pt-BR'

function Schedule(props) {
    const {id_doctor, id_service} = props.route.params;
    const [selected, setSelected] = useState(new Date().toISOString().slice(0, 10));
    const [selctedHour, setSelectedHour] = useState('');

    const ClickBooking = async() => {
        try {
            const response = await api.post('/appointments', {
                id_doctor,
                id_service,
                booking_date: selected,
                booking_hour: selctedHour
            });

            if(response.data) {
                Alert.alert('Agendamento realizado com sucesso!');
                props.navigation.popToTop();
            }
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.dateHour}>
            <Calendar 
                theme={styles.theme}
                onDayPress={(day)=>{
                    setSelected(day.dateString)
                }}
                markedDates={{
                    [selected]:{selected:true}
                }}
                minDate={new Date().toDateString()}
            />
            

                <View>
                <Text style={styles.HourText}>Horário</Text>
                    <Picker 
                    selectedValue={selctedHour}
                    onValueChange={itemValue=>setSelectedHour(itemValue)}
                    >
                        <Picker.Item label="09:00h" value="09:00h"/>
                        <Picker.Item label="09:30h" value="09:30h"/>
                        <Picker.Item label="10:00h" value="10:00h"/>
                        <Picker.Item label="10:30h" value="10:30h"/>
                        <Picker.Item label="11:00h" value="11:00h"/>
                    </Picker>
                </View>
            </View>
            <View>
                <Button text='Confirmar reserva' onClick={ClickBooking}/>
            </View>
        </View>
    )
}

export default Schedule