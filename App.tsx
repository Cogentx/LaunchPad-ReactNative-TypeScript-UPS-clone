import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import utilities from './tailwind.json';
import RootNavigator from './src/navigator/RootNavigator';

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing type definitions
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
