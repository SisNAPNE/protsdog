import React, {useState, useEffect} from 'react'
import {View, Text, Button, Switch, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

function Cadastro() {

    const navigation = useNavigation()
    const [state, setState] = useState(false)

    function navegar(screen) {
        navigation.navigate(screen, { user: 'Amanda Inácio'})
    }

    return(
        <View style={styles.container}>
            <Icon name='dog' color='#FFF' size={96}/>
            <View style={styles.title}>
                <Text style={styles.title_text}>Pr<Icon name='paw' color='#FFF' size={48}/>tsD<Icon name='paw' color='#FFF' size={48}/>g</Text>
            </View>
            <Text style={styles.text}>Crie sua conta</Text>
            <View style={styles.input_box}>
                <TextInput 
                    style={styles.input}
                    placeholder="Usuário"
                    placeholderTextColor='#FFF'
                />
                <Icon style={styles.icon} name='account' color='#FFF' size={24}/>
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

            <View style={styles.box_switch}>    
                <View style={{width: '30%', alignItems: 'flex-end'}}>
                    <Text style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>TUTOR</Text>
                </View>
            
                <View style={{width: '40%', alignItems: 'center'}}>
                    <Switch
                        trackColor={{ false: "#FFF", true: "#FFF" }}
                        thumbColor={state ? "#660033" : "#660033"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setState(state ? 'true' : 'false') }
                        value={state}
                        style={{ transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }] }}
                    />
                </View>
            
                <View style={{width: '30%', alignItems: 'flex-start'}}>
                    <Text style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>VET.</Text>
                </View>
            </View>
            

            <View style = {styles.button}>
                <Button 
                    title="Cadastrar"
                    onPress={() => navegar('Home')}
                    color = '#440019'
                />
            </View>
            <View style = {[styles.button, {marginTop:10}]}>
                <Button 
                    title="Autenticar"
                    onPress={() => navegar('Login')}
                    color = '#660033'
                />
            </View>
        </View>
    )
}

export default Cadastro

