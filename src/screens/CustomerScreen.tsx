import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';

const CustomerScreen = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView style={tw("flex-1 items-center justify-center")}>
      <Text style={tw("text-blue-500")}>Legato</Text>
    </SafeAreaView>
  );
};

export default CustomerScreen;
