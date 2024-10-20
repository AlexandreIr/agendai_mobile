import { COLORS, FONTSIZE } from "../../constants/theme";

export const styles = {
    container:{
        borderColor: COLORS.white,
        borderWidth:2,
        marginBottom:10,
        padding:10,
        borderRadius:6,
        position:'relative'
    },
    textContainer:{

    },
    serviceDoctorText:{
        fontSize: FONTSIZE.large,
    },
    specialityText:{
        opacity:.4
    },
    dateHourContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5,
        gap:6
    },
    icons:{
        width:30,
        height:30,
    },
    booking:{
        opacity:.4,
        fontSize:FONTSIZE.small,
    },
    btnComponent:{
        position:'absolute',
        width:'50%',
        bottom:'15%',
        right:10
    }
}