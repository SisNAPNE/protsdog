import React, {useState, useEffect} from 'react'
import {View, Text, Button, TouchableOpacity, TextInput, ActivityIndicator, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import api from '../../services/api';
import styles from './styles'

function Annotation({route}) {

    const [text, setText] = useState('')
    const [load, setLoad] = useState(true)

    async function loadAnnotation() {

        setLoad(true)

        await api.get('/anotar/1').then(response => {
           
            setText(response.data[0].texto)
            console.log(response.data)
        })
        .catch(error => {
            alert('[ERROR]');
        })

        setLoad(false)
    }

    async function sendAnnotation() {

        if(text != '') {
            
            setLoad(true)

            await api.post('/anotar', {
                'id' : 1,
                'texto': text
            }).then(response => {
                alert('Atualizado')
            }).catch(error => {
                alert('[ERROR]');
            })
       
            setLoad(false)
        }
        else {
            Alert.alert(
                "Atualização",
                "[Erro]: campo possui preenchimento obrigatório!",
                [ 
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            )
        }
    }

    useEffect(() => {
        loadAnnotation()
    }, [])

    return(
        <ScrollView>
            {
                load
                ?
                    <View style={[styles.container, {marginTop: 100, marginBottom: 100}]}>
                        <ActivityIndicator size="large" color="#660033" style={{ transform: [{ scaleX: 2.0 }, { scaleY: 2.0 }] }}/>
                    </View>
                :
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => sendAnnotation() }
                        >
                            <Icon name='content-save-check-outline' color='#660033' size={48}/>
                        </TouchableOpacity>
                        <View style={styles.box}>
                            <View style={{width: '25%', alignItems:'center'}}>
                            </View>
                            <View style={{width: '50%', alignItems:'center'}}>
                                <Text style={styles.text}>ANOTAÇÕES</Text>
                            </View>
                            <View style={{width: '25%', alignItems:'center'}}>
                                <Icon name='book' color='#660033' size={36}/>
                            </View>
                        </View>
                        <TextInput
                            multiline={true}
                            numberOfLines={21}
                            onChangeText={ (value) => setText({value}) }
                            value={text}
                            style={styles.input}
                        />
                    </View>
            }
        </ScrollView>
    )
}

export default Annotation