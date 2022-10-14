import React from 'react'
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function Graph({route}) {

    const navigation = useNavigation()

    function navegar() {
        navigation.navigate('Pet')
    }

    return(
        <View style={styles.container}>
            <Button 
                title="Navegar / Contato"
                onPress={() => navegar()}
                color = "#F77737"
            />
        </View>
    )
}

export default Graph