import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {LoginButtons, Logo} from '../../components';
import {Registro} from './Registro';
import { supabase} from '../../services/supabase';

import type {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';

interface AuthFormProps {
  onSignUp: (credentials: SignUpWithPasswordCredentials) => void;
  onLogin: (credentials: SignInWithPasswordCredentials) => void;
  loading: boolean;
}

const Separator = () => {
    return <View style={styles.separator} />;
  };

export function IniciarSesion({
  onSignUp,
  onLogin,
  loading
}: AuthFormProps) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
      onLogin({ email, password });
    }

return (
  <View>
  <View style={styles.container}>
    <Logo/>
    <Text style={styles.title}>Iniciar Sesion</Text>
      <View>
        <TextInput
            style={styles.textInput}
            placeholder='Usuario@email.com' 
            autoCapitalize={'none'}
            keyboardType="email-address"
            returnKeyType={'done'}
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
        />
      </View>
    <TextInput
        style={styles.textInput}
        placeholder='Contraseña' 
        returnKeyType='done'
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
    />
    <Button
        title='Iniciar sesión'
        onPress={handleSubmit}
    />

    <View >
      <Text style={{ marginBottom: 8 }}>
          ¿No tienes una cuenta?
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Registro')}>
        <Text>Regístrate</Text>
      </TouchableOpacity>
    </View>

    <Separator />

    <LoginButtons />

    <StatusBar style="auto" />
    </View>
  </View>
);
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f1f1f1',
      paddingTop: 20,
      alignItems: 'center'
      // justifyContent: 'center',
    },
    title: {
      fontSize:30,
      fontWeight: 'bold',
      marginBottom: 10
    },
    textInput:{
      borderWidth:1,
      borderColor: 'gray',
      padding: 10,
      width:'80%',
      height: 50,
      margin:10,
      borderRadius: 30,
    },
    textPassword:{
      
    },
    buttonStart:{
      borderRadius: 50
    },
    separator: {
      height: 1,
      width: '90%',
      backgroundColor: 'black',
      margin: 15
    }
  });

export default IniciarSesion;