import { Text, View } from "react-native"
import { styles } from "./profilePage.style"
import Button from "../../components/button/button"
import { AuthContext } from "../../contexts/authContext"
import { useContext } from "react";

function ProfilePage() {
  const {setUser} = useContext(AuthContext);
  const handleLogout = () => {
    setUser({});
  }


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
            <View style={styles.btn}>
              <Button text="Sair" theme="danger" onClick={handleLogout}/>
            </View>
        </View>
    </View>
  )
}

export default ProfilePage