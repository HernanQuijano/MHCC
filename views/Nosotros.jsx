import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import {MenuDesplegable, Logo} from "../components";
import * as Animatable from 'react-native-animatable';

export function Nosotros() {
  return (
    <View style={styles.container}>
      <MenuDesplegable/>
      <Animatable.View animation="slideInLeft" duration={500}>
        <Text style={styles.title}>
          Bienvenidos a nuestra aplicación
        </Text>
      </Animatable.View>
      <Animatable.View animation="slideInLeft" duration={500}>
        <Logo />
      </Animatable.View>
      <Animatable.View animation="slideInLeft" duration={550}>
        <Text style={styles.Text}>
          Leiner Libardo Mendoza Rodriguez 160004249{"\n"}Hernan David Quijano
          Gonzalez 160004224{"\n"}
          Tecnologías avanzadas
        </Text>
      </Animatable.View>
      <Animatable.View animation="slideInLeft" duration={600}>
        <Text style={styles.Text}>
          Somos un museo de la historia de la computación en colombia.
        </Text>
      </Animatable.View>
      <Animatable.View animation="slideInLeft" duration={650}>
        <Text style={styles.Text}>
          Aca se podra encontrar la historia de la computación en colombia y la venta de articulos relacionados a la misma, tambien articulos que sean retros
        </Text>
      </Animatable.View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    // alignItems: "flex-start"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    // fontFamily: 'Roboto'
  },
  Text: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
    // fontFamily: 'Roboto',
    color: "#000"
  }
});