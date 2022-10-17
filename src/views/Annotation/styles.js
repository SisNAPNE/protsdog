import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },
    input: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#660033",
        width: '90%',
        fontWeight: 'bold',
        color: '#660033',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#660033',
        marginBottom: 10,
        marginLeft: 12,
        textAlign: 'center',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },

    button: {
        position: 'absolute',
        top: 10,
        left: 10,
        elevation: 3,
    },
    text_data: {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#660033',
    }

})

export default styles