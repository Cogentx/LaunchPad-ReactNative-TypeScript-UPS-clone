import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTailwind } from 'tailwind-rn/dist';


const OrderScreen = () => {

  const tw = useTailwind();

  return (
    <SafeAreaView style={tw('text-red-500')}>
      <Text>OrderScreen</Text>
    </SafeAreaView>
  );
};

export default OrderScreen;
