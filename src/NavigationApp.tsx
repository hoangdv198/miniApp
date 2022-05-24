import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from './Views/MainScreen';
import TwoScreen from './Views/TwoScreen';
const Stack = createNativeStackNavigator();
const NavigationApp: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Home2" component={TwoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
