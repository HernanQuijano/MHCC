import 'react-native-url-polyfill/auto';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator  } from '@react-navigation/native-stack';
import {IniciarSesion, Registro, Nosotros, Tienda, Museo} from './views';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
        <Stack.Screen name="Registro" component={Registro}/>
        {/* <Stack.Screen name="Tienda" component={Tienda}/> */}
        {/* <Stack.Screen name="Museo" component={Museo}/> */}
        {/* <Stack.Screen name="Nosotros" component={Nosotros}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});