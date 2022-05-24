import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from './ultis/types/Navigation';
import MainScreen from './Views/MainScreen';
import App1 from './Views/App1/App1';
const Stack = createNativeStackNavigator();
const NavigationApp: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.Home}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.Home} component={MainScreen} />
        <Stack.Screen name={Screens.App1} component={App1} />
        <Stack.Screen name={Screens.App2} component={App1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
