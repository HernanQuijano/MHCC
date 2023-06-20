import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IniciarSesion from './views/IniciarSesion';
import Nosotros from './views/nosotros';
import Tienda from './views/Tienda';
import Museo from './views/Museo'
import MenuDesplegable from './components/MenuDesplegable';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={IniciarSesion} />
        <Stack.Screen name="Tienda" component={Tienda}/>
        <Stack.Screen name="Museo" component={Museo}/>
        <Stack.Screen name="Nosotros" component={Nosotros}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}