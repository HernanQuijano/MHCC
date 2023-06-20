import { StyleSheet, Text, View, TextInput, Image, Button, Alert} from 'react-native';
import MenuDesplegable from '../components/MenuDesplegable';
import ProductsList from '../components/ProductsList';


export default function Tienda(){
    
    return(
    <View /*style={styles.container}*/>
        <MenuDesplegable />
        <ProductsList />
    </View>
    )
}