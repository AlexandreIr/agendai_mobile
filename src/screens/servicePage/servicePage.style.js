import { COLORS, FONTSIZE } from "../../constants/theme";

export const styles={
    container:{
        flex:1,
        marginTop:30,
    },
    banner:{
        backgroundColor:COLORS.blue,
        alignItems:'center',
        height:250,
        justifyContent:'center',
        color:'white',
    },
    bannerText:{
        color:'white'
    },
    bannerTitle:{
        fontSize:FONTSIZE.large,
        fontWeight:'bold'
    }
}