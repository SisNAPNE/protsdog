import React from 'react';
import { LogBox, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Tabs from './src/navigation/tabs'
import Login from './src/views/Login'
import Cadastro from './src/views/Cadastro'

const Stack = createStackNavigator()

function App() {

  return(
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
			<Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
	  		<Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
		</Stack.Navigator>
  	</NavigationContainer>
  )
}

LogBox.ignoreAllLogs()

export default App


// android/app/src/main/res/values/