import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
import DiscoverScreen from './screens/DiscoverScreen';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar } from './components/CustomTabBar';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export const DISCOVER_SCREEN = 'Discover';
export const ROOMS_SCREEN = 'Rooms';
export const DMS_SCREEN = 'DMs';
export const PROFILE_SCREEN = 'Profile';

const store = createStore(reducers, applyMiddleware(thunk, logger));

const EmptyScreen = () => null;

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen
          name={DISCOVER_SCREEN}
          component={DiscoverScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name={ROOMS_SCREEN} component={EmptyScreen} />
        <Tab.Screen name={DMS_SCREEN} component={EmptyScreen} />
        <Tab.Screen name={PROFILE_SCREEN} component={EmptyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
