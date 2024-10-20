import { COLORS, FONTSIZE } from "../../constants/theme"; 

const styles = {
    btn:{
        width:'100%',
        borderRadius:6,
        padding:12,
    },
    primary:{
        backgroundColor: COLORS.blue,
    },
    danger:{
        backgroundColor: COLORS.orange
    },
    text:{
        color:COLORS.white,
        fontSize:FONTSIZE.normal,
        textAlign:'center',
    }
    
}

export default styles;