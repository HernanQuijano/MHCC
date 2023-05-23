import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IniciarSesion from './views/IniciarSesion';
import Nosotros from './views/nosotros';
import Inicio from './views/Inicio';
import MenuDesplegable from './components/MenuDesplegable';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Iniciar Sesion" component={IniciarSesion} />
        <Stack.Screen name="Nosotros" component={Nosotros}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}