import React, {useState, useEffect} from 'react'
import {View, Text, Button, TouchableOpacity, TextInput, ActivityIndicator, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import api from '../../services/api';
import styles from './styles'

function Annotation({route}) {

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

    const [texto, setTexto] = useState('')
    const [datahora, setData] = useState('')
    const [load, setLoad] = useState(true)

    function layoutDataHora(value) {

        // aux = array()
        let aux = value.split(' ')
        let hora = aux[1]
        aux = aux[0].split('-')
        let data = aux[2] + "/" + meses[aux[1]] + "/" + aux[0]
        aux = data + " - " + hora

        setData(aux)
    }

    async function loadAnnotation() {

        setLoad(true)

        await api.get('/anotar/1').then(response => {
           
            setTexto(response.data[0].texto)
            layoutDataHora(response.data[0].datahora)
            console.log(response.data)
        })
        .catch(error => {
            alert('[ERROR]');
        })

        setLoad(false)
    }

    async function sendAnnotation() {

        if(texto != '') {
            
            setLoad(true)

            await api.post('/anotar', {
                'id': 1,
                'texto': texto
            }).then(response => {
                alert('Atualizado')
            }).catch(error => {
                alert('[ERROR]');
            })
       
            setLoad(false)
        }
        else {
            alert("[Erro]: campo possui preenchimento obrigatório!")
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
                            numberOfLines={18}
                            onChangeText={ (value) => setTexto(value) }
                            value={texto}
                            style={styles.input}
                        />
                        <Text style={styles.text_data}>
                            {datahora}
                        </Text>
                    </View>
            }
        </ScrollView>
    )
}

export default Annotation