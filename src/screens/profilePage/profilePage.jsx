import { Text, View } from "react-native"
import { styles } from "./profilePage.style"
import Button from "../../components/button/button"
import { AuthContext } from "../../contexts/authContext"
import { useContext, useEffect } from "react";
import api from "../../constants/api";

function ProfilePage() {
  const {user,setUser} = useContext(AuthContext);
  const handleLogout = () => {
    api.defaults.headers.common['Authorization'] = '';
    setUser({});
  }

  return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.primary]}>Meu Perfil</Text>
        <View style={styles.profileInfo}>
            <View style={styles.item}>
                <Text style={styles.title}>Nome</Text>
                <Text style={styles.text}>{user.name}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>E-mail</Text>
                <Text style={styles.text}>{user.email}</Text>
            </View>
            <View style={styles.btn}>
              <Button text="Sair" theme="danger" onClick={handleLogout}/>
            </View>
        </View>
    </View>
  )
}

export default ProfilePage