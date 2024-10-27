import { COLORS, FONTSIZE } from "../../constants/theme"

const styles = {
    container:{
        backgroundColor:'white',
        flex:1,
        padding:50,
        justifyContent: 'space-between'
    },
    containerLogo:{
        alignItems:'center',
        padding:30
    },
    logo:{
        width:200,
        height:46,
    },
    containerInput:{
        gap:10
    },
    textComponent:{
        backgroundColor:COLORS.white,
        padding:10,
        borderRadius:6,
    },
    footer:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    clicableText:{
        color:COLORS.blue,
    }
}

export default styles;