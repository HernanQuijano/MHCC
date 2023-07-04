import {View, StyleSheet} from 'react-native';
import {MenuDesplegable, ProductsList} from '../components';

export function Tienda(){
    
    return(
    <View style={styles.container}>
        <MenuDesplegable />
        <ProductsList />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginBottom:100,
      alignItems: 'center'
    }
})

export default Tienda;