import { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './account.style';
import Button from '../../components/button/button';
import {Logo} from '../../constants/icons';


function AccountPage(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = async() => {
      try {
        const response = await api.post('/users/register', { name, email, password });
        if(response.data) {
          Alert.alert('Usuário criado com sucesso!');
          setName('');
          setEmail('');
          setPassword('');
        }
      } catch (error) {
        if(error.response.data.error){
          Alert.alert(error.response.data.error);
        } else {
          Alert.alert("Um erro ocorreu"+error.message);
        }
      }
    }

    const handleLoginPage = () => {
      props.navigation.navigate('login');
    }


    return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={Logo} style={styles.logo}/>
      </View>
      <View style={styles.containerInput}>
        <TextInput 
          value={name}
          onChangeText={setName}
          placeholder='Nome'
          style={styles.textComponent}
        />
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
      <Button 
        onClick={handleCreateAccount}
        text='Criar conta'/>
      </View>
      <View style={styles.footer}>
        <Text>Já tenho conta. </Text>
        <TouchableOpacity onPress={handleLoginPage}> 
          <Text style={styles.clicableText}>Fazer login aqui.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountPage