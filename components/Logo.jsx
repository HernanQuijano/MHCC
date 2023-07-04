import { StyleSheet, Image} from "react-native";
import logo from "../assets/logos/logo-removebg.png";

export const Logo = () =>{
    return(
        <Image
          style={styles.logo}
          source={logo}
          />
    );
}

const styles = StyleSheet.create({
    logo:{
        width: 250,
        height: 250,
        marginBottom: 10
      }
});

export default Logo;