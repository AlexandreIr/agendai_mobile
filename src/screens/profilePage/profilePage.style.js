import { COLORS, FONTSIZE } from "../../constants/theme";

export const styles = {
    container:{
        flex:1,
        width:'100%',
        gap:10,
        paddingTop:20,
        backgroundColor:'white'
    },
    primary:{
        color:COLORS.blue,
        fontSize:FONTSIZE.xlarge,
        textAlign:'center',
        borderBottomColor: COLORS.white,
        borderBottomWidth: 2,
        padding:20
    },
    profileInfo:{
        gap:20
    },
    item:{
        gap:10,
        paddingBottom:30,
        justifyContent:'center',
        borderBottomColor: COLORS.white,
        borderBottomWidth: 2,  
        paddingLeft:15
    },
    title:{
        color: COLORS.darkerGrey,
        fontSize:FONTSIZE.normal
    }, 
    text:{
        fontSize:FONTSIZE.large
    },
    btn:{
        margin:20
    }
}