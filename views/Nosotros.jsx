import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button} from "react-native";
import logo from "../assets/logos/logo-removebg.png";
import MenuDesplegable from "../components/MenuDesplegable";

export default function Nosotros() {
  return (
    <View>
      <View>
      <MenuDesplegable/>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={logo}
          />
        <Text style={styles.Text}>
          Leiner Libardo Mendoza Rodriguez 160004249.{"\n"}Hernan David Quijano
          Gonzales 160004224.{"\n"}
          Tecnologías avanzadas {"\n"}
          {"\n"}
          Bienvenidos a nuestra aplicación. Somos un museo de la historia de la
          computación en colombia.
        </Text>
        <Text style={styles.Text}>
          Aca se podra encontrar la historia de la computación en colombia y la
          venta de articulos relacionados a la misma, tambien articulos que sean
          retros
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    // alignItems: "flex-start",
    paddingBottom: 20
  },
  logo:{
    width: 250,
    height: 250,
    marginBottom: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center"
    // fontFamily: "Arial"
  },
  Text: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
    // fontFamily: "Arial",
    color: "#000"
  },
  button: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
    // fontFamily: "Arial"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  }
});