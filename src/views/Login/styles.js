import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#660033'
    },
    title: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title_text: {
        fontSize: 56,
        color: '#FFF',
    },
    input_box: {
        justifyContent: 'center',
    },
    input: {
        width: 320,
        borderColor: '#FFF',
        color: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 5,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
    },
    button: {
        marginTop: 30,
        width: '80%',
    },
    icon: {
        position: 'absolute',
        right: 10,
    },
    link: {
        marginTop: 10,
        width: '80%',
    },
})

export default styles