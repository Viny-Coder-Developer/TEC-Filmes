import { View, Text, TouchableOpacity, Image } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./style";

export default function Detalhes() {
  const route = useRoute();
  const navigation = useNavigation();

  const notaNumerica = parseFloat(route.params.nota.replace('⭐️', '').trim());

  return (
    <View style={styles.Container}>
      <Image style={styles.poster} source={{ uri: route.params.poster }} />
      <Text style={styles.titulo}>{route.params.titulo}</Text>
      <Text style={styles.lancamento}>{route.params.lancamento}</Text>

      <Stars
        default={notaNumerica}
        count={10}
        half={true}
        starSize={30}
        fullStar={<Icon name={'star'} style={{ color: 'gold', fontSize: 30 }} />}
        emptyStar={<Icon name={'star-outline'} style={{ color: 'gold', fontSize: 30 }} />}
        halfStar={<Icon name={'star-half'} style={{ color: 'gold', fontSize: 30 }} />}
        disabled={true}
      />

      <TouchableOpacity style={styles.Botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textBotao}>CLIQUE AQUI PARA VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}