import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native'; 
import Banner from '../../Componentes/Banner';
import Filmes from '../../data/movies';
import Cabecalho from '../../Componentes/Cabecalho'; 
import Pesquisa from '../../Componentes/Pesquisa'; 
import Cards from '../../Componentes/Cards';

export default function Home() { 
    return ( 
        
      <View style = {styles.container}> 

        <Cabecalho></Cabecalho>
        <Pesquisa></Pesquisa>
        <Banner></Banner>
            
      <View style = {{width:'90%'}}>
    
      <FlatList
        horizontal = {true}
        data = {Filmes}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
          <Cards
            poster = {item.poster}
            titulo = {item.titulo}
            lancamento = {item.lancamento}
            nota = {item.nota} />
        )}
        />
    
        </View>
    
        <Text style = {styles.autor}>Centro Paula Souza 2025 / @ Vinícius Novaes </Text> 
    
        </View>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
          flex:1,
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