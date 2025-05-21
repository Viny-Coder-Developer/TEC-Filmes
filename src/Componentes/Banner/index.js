import { View, Text, Image } from 'react-native';
import styles from "./style";

export default function Banner() {
  return (

    <View>
      <Text style={styles.textBanner}>Em Cartaz</Text>
      <Image style={styles.imageBanner} source={require('../Img/Filme Em Cartaz.png')} />
    </View>

  );
}