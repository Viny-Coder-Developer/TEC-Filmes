import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingRight: 16,
    width: 140,
    height: 350
  },
  poster: {
    width: '100%',
    height: 180,
    borderRadius: 8
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    paddingTop: 8
  },
  lancamento: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
    paddingTop: 8
  },
  nota: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    fontSize: 13,
    paddingTop: 8,
    marginBottom: 15
  },
})

export default styles;