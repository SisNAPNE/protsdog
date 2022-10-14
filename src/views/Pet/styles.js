import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    picture: {
        flex: 1,
        aspectRatio: 1,     // não permite que React redimensione a imagem
        borderRadius: 75,
    },
    boxLeft: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxRight: {
        flex: 7,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        borderColor: '#660033',
        color: '#660033',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 5,
        textAlign: 'center',
    },
    text: {
        fontSize: 24,
        color: '#660033',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    input_box: {
        width: '100%',
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        right: 25,
    },
    box_switch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
})

export default styles