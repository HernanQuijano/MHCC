import { Button } from '@react-native-material/core';
import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Animated, Text } from 'react-native';

export default function MenuDesplegable({navigation}){
  const [isExpanded, setIsExpanded] = useState(false);
  const menuHeight = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(menuHeight, {
      toValue: isExpanded ? 0 : 200, // Altura del menú cuando está expandido
      duration: 300, // Duración de la animación en milisegundos
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleMenu}>
        <Text>Menu2</Text>
      </TouchableOpacity>

      <Animated.View style={{ height: menuHeight, overflow: 'hidden' }}>
        <TouchableOpacity >
          <Button
            title="Inicio" onPress={() => navigation.navigate('Inicio')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Nosotros')}>
          <Text>Nosotros</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Iniciar Sesion')}>
          <Text>Iniciar Sesion</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
