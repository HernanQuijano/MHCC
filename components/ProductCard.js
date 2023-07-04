import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import { useColorScheme } from "nativewind";

export default function ProductCard({
  image,
  category,
  title,
  price,
  description,
}) {
  const [count, setCount] = React.useState(1);
  // const { colorScheme } = useColorScheme();
  return(
    <View style={{ width: "100%", backgroundColor: "white", borderRadius: 20, padding: 10, marginBottom: 10, backgroundColor: colorScheme === 'dark' ? 'rgba(125, 125, 125, 0.1)' : 'white' }}>
      <View style={{backgroundColor: "white", borderRadius: 20}}>
        <Image
          source={{ uri: image }}
          style={{width: "100%", height: 200,resizeMode: "contain" }}
        />
      </View>
      <View style={{marginTop: 5}}>
        <Text style={{ fontSize: 18, color: '#000', opacity: 0.5, color: colorScheme === 'dark' ? 'white' : 'black',opacity: colorScheme === 'dark' ? 0.7 : 1 }}>
          {category}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000', color: colorScheme === 'dark' ? 'white' : 'black' }}>{title}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}> 
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count - 1)}
            />
            <Text style={{ fontSize: 24, color: '#FFF',color: colorScheme === 'dark' ? 'white' : 'black' }}>{count}</Text>  
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#FFF', color: colorScheme === 'dark' ? 'white' : 'black' }}>
            ${price * count}
          </Text>
        </View>
        <Text numberOfLines={2} style={{ fontSize: 12, color: '#000',color: colorScheme === 'dark' ? 'white' : 'black', opacity: 0.6 }}>
          {description}
        </Text>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', borderRadius: 9999, padding: 12, width: '83%', alignSelf: 'center', marginTop: 20, backgroundColor:"black",  color: colorScheme === 'dark' ? 'white' : 'white', opacity: 0.9 }}>
          <Text style={{ color: 'white', fontWeight: 'bold',color: colorScheme === 'dark' ? 'white' : 'black '  }}>
            Agregar al carrito  
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}