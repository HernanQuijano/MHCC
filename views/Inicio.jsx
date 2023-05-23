import { StyleSheet, Text, View, TextInput, Image, Button, Alert} from 'react-native';
import MenuDesplegable from '../components/MenuDesplegable';
import ProductsList from '../components/ProductsList';


export default function Inicio({navigation}){
    
    return(
    <View /*style={styles.container}*/>
        {/* <MenuDesplegable /> */}
        <Button
            title="Nosotros"
            onPress={() => navigation.navigate('Nosotros')}
        />
        <Button
            title="Iniciar Sesion"
            onPress={() => navigation.navigate('Iniciar Sesion')}
        />
        <Text>Este es el inicio</Text>
        <ProductsList />
    </View>
    )
}