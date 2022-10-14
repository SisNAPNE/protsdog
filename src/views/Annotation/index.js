import React, {useState, useEffect} from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

function Annotation({route}) {

    const navigation = useNavigation()
    const [text, setText] = useState('')

    function navegar() {
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>ANATOÇÕES</Text>
            <Icon name='lead-pencil' color='#FFF' size={36}/>
            <TextInput
                multiline={true}
                numberOfLines={8}
                onChangeText={(text) => setText({text})}
                value={text}
                style={styles.input}
            />
        </View>
    )
}

export default Annotation