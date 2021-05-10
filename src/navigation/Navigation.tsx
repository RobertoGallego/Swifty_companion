import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "src/components/Homepage"
import ProfileScreen from "src/components/Profile"
import SearchScreen from "src/components/Searchpage"

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            {/* <Stack.Screen name="Search" component={SearchScreen} /> */}
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;