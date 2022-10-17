import React, {useState, useEffect} from 'react'
import {    View, Text, Switch, TextInput, 
            Image, ScrollView, TouchableOpacity, 
            ActivityIndicator, Keyboard
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DatePicker from 'react-native-date-picker'

import api from '../../services/api';
import styles from './styles'

function Pet({route}) {
    
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

    const [nome, setNome] = useState("")
    const [raca, setRaca] = useState("")
    const [peso, setPeso] = useState(0)
    const [nascimento, setNascimento] = useState("Data de Nascimento")
    const [data, setData] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [problema, setProblema] = useState(false)
    const [load, setLoad] = useState(true)

    function getAge(dia, mes, ano) {
        
        let anos, texto
        let d = new Date
        let ano_atual = d.getFullYear()
        let mes_atual = d.getMonth() + 1
        let dia_atual = d.getDate()

        ano = +ano
        mes = +mes
        dia = +dia

        anos = ano_atual - ano;

        if (mes_atual < mes || mes_atual == mes && dia_atual < dia) {
            anos--;
        }

        if(anos < 0) anos = 0

        texto = dia + "/" + meses[mes-1] + "/" + ano + " - " + anos + " ano(s)";

        return texto;
    }

    function loadDate(date) {
        
        let texto = getAge(date.getUTCDate(), (date.getUTCMonth()+1), date.getUTCFullYear())
        
        setData(date)
        setNascimento(texto)
        setOpen(false)
    }

    async function loadInfo() {

        setLoad(true)

        await api.get('/info/1').then(response => {
           
            let aux = response.data[0].nascimento.split('-')
            setNome(response.data[0].nome)
            setRaca(response.data[0].raca)
            setPeso(response.data[0].peso)
            setProblema(response.data[0].problema == 1 ? true : false)
            setNascimento(getAge(aux[2], aux[1], aux[0]))

            console.log(response.data)
        })
        .catch(error => {
            alert('[ERROR]');
        })

        setLoad(false)
    }

    async function sendInfo() {

        // let dados = nome + " / " + raca + " / " + peso + " / " + data + " / " + problema
        // alert(dados)

        if(nome != '' &&  raca != '' && peso != '' && data != '') {
            
            let n = data.getUTCFullYear() + "-" + (data.getUTCMonth()+1) + "-" + data.getUTCDate()
            setLoad(true)

            await api.post('/info', {
                'id' : 1,
                'nome': nome,
                'raca': raca,
                'peso': peso,
                'nascimento': n,
                'problema': problema
            }).then(response => {
                alert('Atualizado!')
            }).catch(error => {
                alert('ERROR');
            })
       
            setLoad(false)
        }
        else {
            alert("[Erro]: todos os campos possuem preenchimento obrigatório!")
        }
        
        Keyboard.dismiss()
    }

    useEffect(() => {
        loadInfo()
    }, [])

    return(
        
        <ScrollView style={{flex: 1}}>
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
                        onPress={() => sendInfo() }
                    >
                        <Icon name='content-save-check-outline' color='#660033' size={48}/>
                    </TouchableOpacity>
                    <View style={[styles.box, {height: 150, marginBottom:10}]}>
                        <Image 
                            style={styles.picture}
                            // source={{uri: 'http://randomuser.me/api/portraits/women/57.jpg'}}
                            // source={{uri: 'http://gileduardo.com.br/ifpr/img/gaia_p.jpg'}}
                            source={require('../../assets/gaia2_p.jpg')}
                        />
                    </View>
                    <View style={[styles.box, {paddingLeft: 10, paddingRight: 10}]}>
                        <View style={styles.input_box}>
                            <TextInput 
                                style={styles.input}
                                placeholder="Nome"
                                placeholderTextColor='#660033'
                                onChangeText={(value) => setNome(value) }
                                value={nome}
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
                                onChangeText={(value) => setRaca(value) }
                                value={raca}
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
                                onChangeText={(value) => setPeso(value) }
                                value={peso}
                                keyboardType = 'numeric'
                            />
                        </View>
                        <Icon style={styles.icon} name='weight-kilogram' color='#660033' size={24}/>
                    </View>
                    <View style={[styles.box, {paddingLeft: 10, paddingRight: 10}]}>
                        <TouchableOpacity 
                            style={styles.input_box}
                            onPress={() => setOpen(true) }
                        >
                                <TextInput 
                                    style={styles.input}
                                    placeholder={nascimento}
                                    placeholderTextColor='#660033'
                                    editable={false}
                                />
                            
                            <Icon style={styles.icon} name='calendar-clock' color='#660033' size={24}/>
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            mode="date"
                            title="Data de Nascimento"
                            confirmText="Selecionar"
                            cancelText="Cancelar"
                            open={open}
                            date={data}
                            onConfirm={ (date) => loadDate(date) }
                            onCancel={() => setOpen(false) }
                        />
                    </View>
                    <View style={[styles.box, {marginTop: 15}]}>
                        <Text style={[styles.text, {marginBottom:15}]}>Possui problemas cardíacos?</Text>
                        
                        <View style={styles.box_switch}>    
                                <View style={{width: '30%', alignItems: 'flex-end'}}>
                                    {
                                        problema
                                        ?
                                            <Text style={[styles.text, {fontSize: 14}]}>NÃO</Text>
                                        :
                                            <Text style={[styles.text, {fontSize: 24, fontWeight: 'bold'}]}>NÃO</Text>
                                    }
                                </View>
                            
                                <View style={{width: '40%', alignItems: 'center'}}>
                                    <Switch
                                        trackColor={{ false: "#FFF", true: "#FFF" }}
                                        thumbColor={problema ? "#660033" : "#660033"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={() => setProblema(!problema) }
                                        value={problema}
                                        style={{ transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }] }}
                                    />
                                </View>
                            
                                <View style={{width: '30%', alignItems: 'flex-start'}}>
                                    {
                                        problema
                                        ?
                                            <Text style={[styles.text, {fontSize: 24, fontWeight: 'bold'}]}>SIM</Text>
                                        :
                                            <Text style={[styles.text, {fontSize: 14}]}>SIM</Text>
                                    }
                                </View>
                        </View>
                    </View>
                </View>
            }
        </ScrollView>
    )
}

export default Pet