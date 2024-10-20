import { COLORS, FONTSIZE } from "../../constants/theme";

export const styles = {
    container:{
        flex:1,
        borderWidth:2,
        alignItems:'center',
        borderColor: COLORS.white,
        flexDirection:'row',
        padding:25,
    },
    textContainer:{
        flex:1
    },
    serviceText: {
        color:COLORS.lightGrey,
        fontSize:FONTSIZE.normal
    },
    priceText:{
        color:COLORS.blue,
        fontSize:FONTSIZE.small
    },
}
