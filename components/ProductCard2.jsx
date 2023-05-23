import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import { products } from "../data/products";
import { AntDesign } from "@expo/vector-icons";

export default function ProductCard({
  image,
  category,
  title,
  price,
  description,
}) {
  const [count, setCount] = React.useState(1);
  return(
    <View style={{ width: "100%", backgroundColor: "white", borderRadius: 20, padding: 10, marginBottom: 10}}>
      <View style={{backgroundColor: "white", borderRadius: 20}}>
        <Image
          source={{ uri: image }}
          style={{width: "100%", height: 200,resizeMode: "contain" }}
        />
      </View>
      <View style={{marginTop: 5}}>
        <Text style={{ fontSize: 18, color: '#000', opacity: 0.5}}>
          {category}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000', }}>{title}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}> 
            <AntDesign
              name="minuscircleo"
              size={24}
              onPress={() => setCount(count - 1)}
            />
            <Text style={{ fontSize: 24, color: '#FFF' }}>{count}</Text>  
            <AntDesign
              name="pluscircleo"
              size={24}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#FFF'}}>
            ${price * count}
          </Text>
        </View>
        <Text numberOfLines={2} style={{ fontSize: 12, color: '#000', opacity: 0.6 }}>
          {description}
        </Text>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', borderRadius: 9999, padding: 12, width: '83%', alignSelf: 'center', marginTop: 20, backgroundColor:"black", opacity: 0.9 }}>
          <Text style={{ color: 'white', fontWeight: 'bold'}}>
            Agregar al carrito  
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}