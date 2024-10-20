import { Text, View } from "react-native"
import { styles } from "./profilePage.style"

function ProfilePage() {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.primary]}>Meu Perfil</Text>
        <View style={styles.profileInfo}>
            <View style={styles.item}>
                <Text style={styles.title}>Nome</Text>
                <Text style={styles.text}>Alexandre Fernandes</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>E-mail</Text>
                <Text style={styles.text}>alex.silva250@hotmail.com</Text>
            </View>
        </View>
    </View>
  )
}

export default ProfilePage