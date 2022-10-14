import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from '../views/Home'
import Pet from '../views/Pet'
import Annotation from '../views/Annotation'
import Graph from '../views/Graph'

const Tab = createBottomTabNavigator()

const icons = {
    Home: {
      name: 'home'
    },
    Pet:{
      name: 'dog'
    },
    Annotation:{
      name: 'lead-pencil'
    },
    Graph:{
        name: 'chart-bar'
    },
}

function Tabs({route}) {

    const navigation = useNavigation()
    const {user} = route.params 

    function navegar(screen) {
        navigation.navigate(screen, { user: 'Amanda Inácio'} )
    }

    function LogoTitle() {
        return (
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center'}}>
                    <Icon name='dog' color='#FFF' size={36}/>
                    <Text style={{fontSize: 21, color: '#FFF', fontWeight: 'bold', marginLeft: 10, width:'70%'}}>
                        Pr<Icon name='paw' color='#FFF' size={20}/>tsD<Icon name='paw' color='#FFF' size={20}/>g
                    </Text>
                </View>
                <View style={{justifyContent:'flex-end', alignItems:'center', width:'30%'}}>
                    <TouchableOpacity
                        onPress={() => navegar('Login')}
                    >
                        <Icon style={{marginRight:10}} name='exit-run' color='#FFF' size={28}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
      }

    return (
        <Tab.Navigator
            screenOptions={ ({route}) => ({
                    tabBarIcon: ({ color, size }) => {
                        const { name } = icons[route.name];
                        return <Icon name={name} color={color} size={size}/>
                    } 
                })
            }
            tabBarOptions={{
                style: {backgroundColor: '#660033'},

                activeTintColor: '#FFF',
                inactiveTintColor: '#660033',
                activeBackgroundColor: '#660033'
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                initialParams={{user: user}} 
                options={{ 
                    title: 'Home',
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: '#660033',
                    }, 
                    headerTitle: (props) => <LogoTitle {...props} />
                }}
            />
            <Tab.Screen 
                name="Pet" 
                component={Pet} 
                initialParams={{user: user}} 
                options={{ 
                    title: 'Pet',
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: '#660033',
                    }, 
                    headerTitle: (props) => <LogoTitle {...props} />
                }}
            />
            <Tab.Screen 
                name="Annotation" 
                component={Annotation} 
                initialParams={{user: user}} 
                options={{ 
                    title: 'Anotações',
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: '#660033',
                    }, 
                    headerTitle: (props) => <LogoTitle {...props} />
                }}
            />
            <Tab.Screen 
                name="Graph" 
                component={Graph} 
                initialParams={{user: user}} 
                options={{ 
                    title: 'Sensores',
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: '#660033',
                    }, 
                    headerTitle: (props) => <LogoTitle {...props} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

// headerTitle: (props) => <LogoTitle {...props} />