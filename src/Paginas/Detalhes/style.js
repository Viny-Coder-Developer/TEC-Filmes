import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#2b0048',
        alignContent: 'center',
        paddingTop: 20,
        paddingBottom: 16,
        paddingRight: 16,
    },
    poster: {
        alignSelf: 'center',
        marginTop: 50,
        width: 200,
        height: 300
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
        marginBottom: 15,
        paddingTop: 8
    },
    Botao: {
        marginTop: 20,
        backgroundColor: 'red',
        alignSelf: 'center',
        justifyContent: 'center',
        width: 400,
        height: 90,
    },
    textBotao: {
        fontWeight: 'bold',
        fontFamily: 'Segoe UI',
        textAlign: 'center',
        color: 'white',
        fontSize: 25
    }
})

export default styles;