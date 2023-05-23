import { StyleSheet, Text, View, TextInput, Image, Button, Alert} from 'react-native';
import MenuDesplegable from '../components/MenuDesplegable';
import ProductsList from '../components/ProductsList';


export default function Tienda({navigation}){
    
    return(
    <View /*style={styles.container}*/>
        {/* <MenuDesplegable /> */}
        <Button
            title="Museo"
            onPress={() => navigation.navigate('Museo')}
        />
        <Button
            title="Nosotros"
            onPress={() => navigation.navigate('Nosotros')}
        />
        <Button
            title="Iniciar Sesion"
            onPress={() => navigation.navigate('Iniciar Sesion')}
        />
        <ProductsList />
    </View>
    )
}