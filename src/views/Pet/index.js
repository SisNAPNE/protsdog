import React, {useState, useEffect} from 'react'
import {View, Text, Switch, TextInput, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

function Pet({route}) {

    const navigation = useNavigation()
    const [state, setState] = useState(false);

    function navegar() {
        navigation.navigate('Contato')
    }

    return(
        <View style={styles.container}>
            <View style={[styles.box, {height: 150, marginBottom:20}]}>
                <Image 
                    style={styles.picture}
                    source={{uri: 'https://randomuser.me/api/portraits/women/57.jpg'}}
                />
            </View>
            <View style={[styles.box, {paddingLeft: 10, paddingRight: 10}]}>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor='#660033'
                    />
                </View>
                <Icon style={styles.icon} name='pencil' color='#660033' size={24}/>
            </View>
            <View style={[styles.box, {paddingLeft: 10, paddingRight: 10}]}>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Raça"
                        placeholderTextColor='#660033'
                    />
                </View>
                <Icon style={styles.icon} name='dog' color='#660033' size={24}/>
            </View>
            <View style={[styles.box, {paddingLeft: 10, paddingRight: 10}]}>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Peso"
                        placeholderTextColor='#660033'
                    />
                </View>
                <Icon style={styles.icon} name='weight-kilogram' color='#660033' size={24}/>
            </View>
            <View style={[styles.box, {paddingLeft: 10, paddingRight: 10}]}>
                <View style={styles.input_box}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Idade"
                        placeholderTextColor='#660033'
                    />
                </View>
                <Icon style={styles.icon} name='calendar-clock' color='#660033' size={24}/>
            </View>
            <View style={[styles.box, {marginTop: 30}]}>
                <Text style={[styles.text, {marginBottom:30}]}>Possui problemas cardíacos?</Text>
                
                <View style={styles.box_switch}>    
                        <View style={{width: '30%', alignItems: 'flex-end'}}>
                            <Text style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>NÃO</Text>
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
                            <Text style={[styles.text, {fontSize: 18, fontWeight: 'bold'}]}>SIM</Text>
                        </View>
                </View>
            </View>
        </View>
    )
}

export default Pet