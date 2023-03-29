import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BoloChocolate from './Bolo-de-chocolate';
import BoloFuba from './Bolo-de-fuba';
import BoloMilho from './Bolo-de-milho';
import Home from './Home';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BoloChocolate" component={BoloChocolate} />
        <Stack.Screen name="BoloFuba" component={BoloFuba} />
        <Stack.Screen name="BoloMilho" component={BoloMilho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
