import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaView style={stylesheet.androidSafeArea}>
      <NavigationContainer  >
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    // paddingTop: 0,
    // marginTop: 0
    // paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});