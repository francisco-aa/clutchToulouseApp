import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import Menu from "./src/components/Menu";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import NotificationsHandler from "./src/screens/alerts/notifications/NotificationsHandler";

const MyTheme = {
  dark: false,
  colors: {
    background: '#fff'
  }
}

export default function App() {
  return (
      <Provider store={store}>
        <SafeAreaView style={stylesheet.androidSafeArea}>
          <NotificationsHandler/>
          <NavigationContainer theme={MyTheme} >
            <RootNavigator />
            <Menu/>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>

  );
}

const stylesheet = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
  },
});
