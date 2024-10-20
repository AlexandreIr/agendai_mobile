import { COLORS, FONTSIZE } from "../../constants/theme";

export const styles= {
    container:{
        flex:1,
        backgroundColor:'white',
        padding:20,
        justifyContent:'space-between',
        marginBottom:20
    },
    theme:{
        todayTextColor:COLORS.orange,
        selectedDayBackgroundColor: COLORS.blue,
        selectedDayTexColor:'white',
    },
    HourText:{
        fontSize:FONTSIZE.large,
        fontWeight:'bold',
        color:COLORS.lightGrey
    },
    dateHour:{
        gap:60
    }
}