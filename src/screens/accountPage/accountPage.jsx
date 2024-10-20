import { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './account.style';
import Button from '../../components/button/button';
import {Logo} from '../../constants/icons';


function AccountPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlClick = () =>{
        if(email!=''&&name!=''&&password!=''){
            Alert.alert(`Você foi cadastrado com sucesso, ${name}`);
            setName('');
            setEmail('');
            setPassword('');
        } else {
            Alert.alert('Preencha todos os campos');
        }
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
        onClick={handlClick}
        text='Criar conta'/>
      </View>
      <View style={styles.footer}>
        <Text>Já tenho conta. </Text>
        <TouchableOpacity> 
          <Text style={styles.clicableText}>Fazer login aqui.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountPage