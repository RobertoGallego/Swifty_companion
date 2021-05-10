import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from "src/components/profile"
import SearchScreen from "src/components/searchpage"

const Stack = createStackNavigator();

export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProfileScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};