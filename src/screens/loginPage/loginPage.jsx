import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './login.style';
import {Logo} from '../../constants/icons';
import Button from '../../components/button/button';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <Button text='Acessar'/>
      </View>
      <View style={styles.footer}>
        <Text>Não tenho conta. </Text>
        <TouchableOpacity> 
          <Text style={styles.clicableText}>Criar agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginPage