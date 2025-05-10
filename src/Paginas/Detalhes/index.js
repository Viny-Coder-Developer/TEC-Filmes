import { View, Text, TouchableOpacity } from "react-native-web"
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
export default function Detalhes() {

  const route = useRoute();
  const navigation = useNavigation();
  return (

    <View style={styles.Container}>

      <Text style={styles.titulo}> {route.params.titulo} </Text>
      <Text style={styles.lancamento}> {route.params.lancamento} </Text>

      <View style={{ alignItems: 'center' }}>
        <Stars
          half={true}
          default={2.5}
          update={(val) => { this.setState({ stars: val }) }}
          spacing={4}
          starSize={40}
          count={5}
          fullStar={require('./images/starFilled.png')}
          emptyStar={require('./images/starEmpty.png')}
          halfStar={require('./images/starHalf.png')} />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Stars
          display={3.67}
          spacing={8}
          count={5}
          starSize={40}
          fullStar={require('./images/starFilled.png')}
          emptyStar={require('./images/starEmpty.png')} />
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>CLIQUE AQUI PARA VOLTAR</TouchableOpacity>

    </View>


  );
};