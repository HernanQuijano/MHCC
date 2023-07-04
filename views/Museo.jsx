import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {MenuDesplegable, LineaDeTiempo, CarruselPersonajes} from '../components';
import {articulos} from '../data'
import {theme} from '../theme';

// useFonts();
export function Museo(){
  return (
    <View style={styles.container}>
      <MenuDesplegable/>
      {/* contentContainerStyle={styles.scrollView} */}
      <ScrollView >
        {/* <LineaDeTiempo /> */}
        <View style={styles.scrollView}>
          <Text style={styles.heading}>Historia de la Computación en Colombia</Text>

          {articulos.map((item) => (
            <View key={item.id} style={styles.historyItem}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
        </View>
        {/* <CarruselPersonajes /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom:10,
  },
  scrollView:{
    padding: 20,
    marginBottom:20,
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
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Museo;