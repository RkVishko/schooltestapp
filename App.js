import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DiscoverScreen } from './screens/DiscoverScreen';

const Stack = createStackNavigator();

export const DISCOVER_SCREEN = 'Discover';

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={DISCOVER_SCREEN}
        component={DiscoverScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
