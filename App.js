import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Banner from './src/Componentes/Banner';
import Filmes from './src/data/movies';
import Cabecalho from './src/Componentes/Cabecalho';
import Pesquisa from './src/Componentes/Pesquisa';
import Cards from './src/Componentes/Cards';
import Rotas from './src/Rotas';

export default function App() {
  return (

    <Rotas></Rotas>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f0f4d',
    alignItems: "center"
  },
  autor: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: -180,
    marginTop: 50,
    fontSize: 15
  }
})