import { COLORS, FONTSIZE } from "../../constants/theme"

const styles = {
    container:{
        justifyContent:'space-between',
        flex:1,
        position:'relative',
        backgroundColor:'white'
    },
    imageContainer:{
        alignItems:'center',
        padding:40
    },
    logo:{
        width:200,
        height:46,
    },
    titleText:{
        fontSize:FONTSIZE.normal,
        marginBottom:15,
    },
    doctorContainer:{
        margin:20,
        gap:15,
        paddingBottom:35
    },
}

export default styles