import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Feed from './src/pages/Feed';
import NewsDetails from './src/pages/NewsDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="newsFeed" component={Feed} />
        <Stack.Screen name="newsDetails" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
