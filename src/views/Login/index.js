import React from 'react'
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

function Login() {

    const navigation = useNavigation()

    function navegar(screen) {
        navigation.navigate(screen, { user: 'Amanda Inácio'} )
    }

    return(
        <View style={styles.container}>
            <Icon name='dog' color='#FFF' size={96}/>
            <View style={styles.title}>
                <Text style={styles.title_text}>Pr<Icon name='paw' color='#FFF' size={48}/>tsD<Icon name='paw' color='#FFF' size={48}/>g</Text>
            </View>
            <View style={styles.input_box}>
                <TextInput 
                    style={styles.input}
                    placeholder="e-mail"
                    placeholderTextColor='#FFF'
                />
                <Icon style={styles.icon} name='email' color='#FFF' size={24}/>
            </View>
            <View style={styles.input_box}>
                <TextInput 
                    style={styles.input}
                    placeholder="senha"
                    placeholderTextColor='#FFF'
                />
                <Icon style={styles.icon} name='lock' color='#FFF' size={24}/>
            </View>
            <View style = {styles.link}>
                <TouchableOpacity
                    onPress={() => navegar('Cadastro')}
                >
                    <Text style={styles.text}>Ainda não sou cadastrado</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.button}>
                <Button 
                    title="Autenticar"
                    onPress={() => navegar('Home')}
                    color = '#440019'
                />
            </View>
        </View>
    )
}

export default Login

