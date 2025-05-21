import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function Cards({ poster, titulo, lancamento, nota }) {

  const navigation = useNavigation();
  return (

    <TouchableOpacity style={styles.Container} onPress={() => navigation.navigate('Detalhes', { poster, titulo, lancamento, nota })} >

      <Image style={styles.poster} source={{ uri: (poster) }} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.lancamento}>{lancamento}</Text>
      <Text style={styles.nota}>{nota}</Text>

    </TouchableOpacity>

  );
}