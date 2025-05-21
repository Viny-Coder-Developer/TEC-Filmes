import { View, TextInput } from 'react-native';
import styles from "./style";

export default function Pesquisa() {
  return (

    <View style={styles.ContainerSearch}>
      <TextInput style={styles.InputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>
    </View>

  );
} 