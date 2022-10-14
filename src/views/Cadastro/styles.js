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
        marginBottom: 5,
    },
    title_text: {
        fontSize: 56,
        color: '#FFF',
    },
    text: {
        fontSize: 24,
        color: '#FFF',
        marginBottom: 10,
        textAlign: 'center',
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
    icon: {
        position: 'absolute',
        right: 10,
    },
    button: {
        marginTop: 30,
        width: '80%',
    },
    box_switch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
    },
})

export default styles