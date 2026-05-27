import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './src/screens/Login/Login';
import { Cadastro } from './src/screens/Cadastro/Cadastro';
import { Dashboard } from './src/screens/Dashboard/Dashboard';
import { Formulario } from './src/screens/Formulario/Formulario';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Formulario" component={Formulario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}