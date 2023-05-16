import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IniciarSesion from './views/IniciarSesion';
// import Nosotros from './views/Nosotros';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Nosotros"
          component={Nosotros}
        /> */}
        <Stack.Screen name="Iniciar Sesion" component={IniciarSesion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}