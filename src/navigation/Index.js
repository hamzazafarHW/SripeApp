import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#000000"} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Onboarding1' component={Onboarding1} />
        <Stack.Screen name='Onboarding2' component={Onboarding2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index
