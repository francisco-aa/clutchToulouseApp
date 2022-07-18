import CarrouselContainer from '../components/CarrouselContainer'
import { BackHandler, ScrollView, StyleSheet } from 'react-native'
import Header from '../components/headers/Header'
import React, { useEffect, useState, useCallback} from 'react'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useFocusEffect } from '@react-navigation/native';

type Props = {}

export default function Accueil (props: Props) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () =>{
          BackHandler.exitApp()
          return true
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
  const getFonts = async () => await Font.loadAsync({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.otf'),
    'Poppins-Italic': require('../../assets/fonts/Poppins-Italic.otf'),
    'Poppins-SemiBoldItalic': require('../../assets/fonts/Poppins-SemiBoldItalic.otf')
  })
  const [fontsloaded, setFontsLoaded] = useState(false)
  useEffect(() => {
    async function prepare() {
  try {
    // Keep the splash screen visible while we fetch resources
    await SplashScreen.preventAutoHideAsync();

    // Pre-load fonts, make any API calls you need to do here
    await getFonts();
    
  } catch (e) {
    console.warn(e);
  } finally {
    // Tell the application to render
    setFontsLoaded(true);
  }
}

prepare();
    }, [])
const onLayoutRootView = useCallback(async () => {
 if (fontsloaded) {
  await SplashScreen.hideAsync();
}
}, [fontsloaded]);

if (!fontsloaded) {
 return null;
}
    return (

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} onLayout={onLayoutRootView}>
                <Header bgTexture={require('../../assets/images/Textures/TEXTURE6.png')} />
                <CarrouselContainer type='category'/>
                <CarrouselContainer type='headline'/>
                <CarrouselContainer type='Today'/>
            </ScrollView>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50
  }
})
