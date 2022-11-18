import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import utilities from './tailwind.json';
import RootNavigator from './src/navigator/RootNavigator';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// use stepzen api created in './stepzen'
// NOTE: when using iOS device on local WiFi; use the IP address that Expo Metro is using (your local WiFi IP -- NOT LocalHost)
// keep same port number
const client = new ApolloClient({
  uri: `http://192.168.2.12:5000/api/dev-zen`,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing type definitions
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
