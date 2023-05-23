import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';

export default function Museo({navigation}){
  const historyItems = [
    {
      id: 1,
      title: 'Computadora Antigua',
      image: require('../assets/computadora-antigua.jpg'),
      description: 'Primera computadora que llegó a Colombia hace 60 años.',
    },
    {
      id: 2,
      title: 'Primeros Centros de Cómputo',
      image: require('../assets/centro-de-computo.png'),
      description: 'Breve descripción de los primeros centros de cómputo en Colombia.',
    },
    // Agregar más elementos
  ];

  return (
    <View>
      <View>
      <Button
              title="Tienda"
              onPress={() => navigation.navigate('Tienda')}
          />
          <Button
              title="Nosotros"
              onPress={() => navigation.navigate('Nosotros')}
          />
          <Button
              title="Iniciar Sesion"
              onPress={() => navigation.navigate('Iniciar Sesion')}
          />  
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
    padding: 16,
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
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});