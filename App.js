import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert} from 'react-native';
import LoginButtons from './components/LoginButtons';
import logoMhcc from './assets/logos/logo-removebg.png';

const Separator = () => {
  return <View style={styles.separator} />;
};

export default function App() {
  return (
    <View style={styles.container}>
    <Button
        style={styles.backButton}
        title="Atras"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Image
          style={styles.logo}
          source={logoMhcc}
        />
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Usuario@email.com'
      />
      <TextInput
        style={styles.textInput}
        placeholder='Contraseña'
      />
      <Button
        style={styles.buttonStart}
        title="Iniciar"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Separator />

      <LoginButtons />

      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 100,
    alignItems: 'center'
    // justifyContent: 'center',
  },
  backButton:{
    Color: '#000000',
  },
  logo:{
    width: 250,
    height: 250,
    marginBottom: 10
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
    borderRadius: 30
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
