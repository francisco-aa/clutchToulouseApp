import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import Menu from "./src/components/Menu";

export default function App() {
  return (
    <SafeAreaView style={stylesheet.androidSafeArea}>
      <NavigationContainer >
        <RootNavigator />
        <Menu/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
  },
});