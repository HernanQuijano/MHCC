import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from "../assets/logos/logo-removebg.png";

export default function Nosotros(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>Inicio</Text>
          <Text style={styles.dropdownText}>Productos</Text>
          <Text style={styles.dropdownText}>Contactos</Text>
        </View>
      )}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
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
    textAlign: "center",
    fontFamily: "Cochin"
  },
  Text: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
    fontFamily: "Cochin"
  },
  button: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontFamily: "Cochin"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  },
  dropdown: {
    backgroundColor: "#f2f2f2",
    padding: 5,
    borderRadius: 5
  },
  dropdownText: {
    fontSize: 14,
    color: "#333",
    fontFamily: "Cochin"
  }
});