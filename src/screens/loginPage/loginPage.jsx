import { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './login.style';
import {Logo} from '../../constants/icons';
import Button from '../../components/button/button';
import api from '../../constants/api';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreatePage = () => {
    props.navigation.navigate('register');
  }

  const handleLogin = async () => {
    try {
      const response = await api.post('/users/login', { email, password });
      if(response.data) {
        console.log(response.data);
      }
    } catch (error) {
      if(error.response.data.error){
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Um erro ocorreu"+error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={Logo} style={styles.logo}/>
      </View>
      <View style={styles.containerInput}>
        <TextInput 
          value={email}
          onChangeText={setEmail}
          placeholder='E-mail'
          style={styles.textComponent}
        />

        <TextInput 
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder='Senha'
          style={styles.textComponent}
        />
      <Button text='Acessar' onClick={handleLogin}/>
      </View>
      <View style={styles.footer}>
        <Text>Não tenho conta. </Text>
        <TouchableOpacity onPress={handleCreatePage}> 
          <Text style={styles.clicableText}>Criar agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginPage