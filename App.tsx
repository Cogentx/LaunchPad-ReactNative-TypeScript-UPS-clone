import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import CustomerScreen from './src/screens/CustomerScreen';

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing type definitions
    <TailwindProvider utilities={utilities}>
      <CustomerScreen />
    </TailwindProvider>
  );
}
