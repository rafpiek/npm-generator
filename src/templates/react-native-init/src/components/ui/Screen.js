import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, Text } from 'react-native';

const Screen = ({ children }) => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        {children}
        <Text>Screen</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen;
