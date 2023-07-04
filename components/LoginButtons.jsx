import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

export const LoginButtons = () => {
  const handleGmailLogin = () => {
    // Lógica para iniciar sesión con Gmail
    console.log('Iniciar sesión con Gmail');
  };

  const handleFacebookLogin = () => {
    // Lógica para iniciar sesión con Facebook
    console.log('Iniciar sesión con Facebook');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.gmailButton]}
        onPress={handleGmailLogin}
      >
        <MaterialIcons name="mail" size={24} color="white" />
        <Text style={styles.buttonText}>Iniciar sesión con Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.facebookButton]}
        onPress={handleFacebookLogin}
      >
        <MaterialIcons name="facebook" size={24} color="white" />
        <Text style={styles.buttonText}>Iniciar sesión con Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    button: {
      width: '100%',
      height: 50,
      borderRadius: 50,
      marginBottom: 10,
      padding: 10,
      alignItems: 'center',
      flexDirection: 'row',
    },
    gmailButton: {
      backgroundColor: '#dd4b39',
    },
    facebookButton: {
      backgroundColor: '#3b5998',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      marginLeft: 5, // Espacio entre el icono y el texto
    },
  });

export default LoginButtons;