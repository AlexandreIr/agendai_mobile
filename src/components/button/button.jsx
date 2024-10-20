import { Text, TouchableOpacity } from "react-native"
import styles from "./button.style";

function Button({text, theme, onClick}) {

  return (
    <TouchableOpacity onPress={onClick}
    style={[styles.btn, theme=='danger'?styles.danger:styles.primary]}>
        <Text style={styles.text}>
                {text}
            </Text>
    </TouchableOpacity>
  )
}

export default Button