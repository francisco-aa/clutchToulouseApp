import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Column } from "./components/ColumnTest";
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header bgTexture={require('./assets/textures/TEXTURE6.png')} />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  }
});
