import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';
import MenuDesplegable from '../components/MenuDesplegable';
import {theme} from '../theme'

export default function Museo(){
  const historyItems = [
    {
      id: 1,
      title: '(1957) \n Llegada de la IBM 650',
      image: require('../assets/computadora-antigua.jpg'),
      description: 'Primera computadora que llegó a Colombia hace 60 años.',
    },
    {
      id: 2,
      title: '(1958) \n Coltejer, Ecopetrol y EPM adquieren la IBM 650',
      image: require('../assets/logo-coltejer-ecopetrol-epm.jpg'),
      description: 'Fueron de las primeras empresas que adquirieron esta maquina para realizar procesos de calculo.',
    },
    {
      id: 3,
      title: '(1961) \n Fabricato adquiere la IBM 1401',
      image: require('../assets/IBM-1401-fabricato.jpg'),
      description: 'Esta fue la primera computadora de transistores del pais, con la cual Colombia entró en lo que se conoce como la segunda generación de la industria informática.',
    },
    // Agregar más elementos
  ];

  return (
    <View>
      <View >
      <MenuDesplegable />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Historia de la Computación en Colombia</Text>
        {historyItems.map((item) => (
          <View key={item.id} style={styles.historyItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  historyItem: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});