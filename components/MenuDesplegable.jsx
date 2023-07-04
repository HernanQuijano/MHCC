import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Animated, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function MenuDesplegable(){
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);
  const  menuHeight = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(menuHeight, {
      toValue: isExpanded ? 0 : 90, // Altura del menú cuando está expandido
      duration: 300, // Duración de la animación en milisegundos
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleMenu}>
      <Image source={require('../assets/menu.png')} style={{ width: 40, height: 40, alignItems: 'center' }}/>
      </TouchableOpacity>

      <Animated.View style={{ height: menuHeight, overflow: 'hidden', alignItems: 'center'}} >
        {/* <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
            <Text> Inicio </Text> 
        </TouchableOpacity> */}

        <TouchableOpacity onPress={()=>navigation.navigate('Museo')}>
              <Text>Museo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Tienda')}>
              <Text>Tienda</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Nosotros')}>
                <Text>Nosotros</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default MenuDesplegable;