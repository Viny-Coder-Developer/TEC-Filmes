import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from "./style";

export default function Cabecalho() {
  return (

    <View style={styles.ViewHeader}>
      <TouchableOpacity>
        <Feather style={{ marginLeft: -70 }} name='menu' size={36} color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.TextHeader}> TEC FILMES </Text>
    </View>

  );
} 