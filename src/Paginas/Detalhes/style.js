import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#1f0f4d',
        alignContent: 'center',
        paddingTop: 20,
        paddingBottom: 16,
        paddingRight: 16,
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
        fontSize: 40,
        paddingTop: 8
    },
    lancamento: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        paddingTop: 8
    },
    botao: {
        alignSelf: 'center',
        backgroundColor: 'red',
        fontWeight: 'bold',
        fontFamily: 'Segoe UI',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        width: 400,
        height: 90,
        borderRadius: 2,
        borderColor: 'black',
        fontSize: 25
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
})

export default styles;