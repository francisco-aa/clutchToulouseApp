import CarrouselContainer from '../components/CarrouselContainer'
import { ScrollView, StyleSheet } from 'react-native'
import Header from '../components/headers/Header'
import AppLoading from 'expo-app-loading'
import React, { useState } from 'react'
import * as Font from 'expo-font';
import CarrouselContainer from '../components/CarrouselContainer';
import Header from '../components/Header';
import { useFocusEffect } from '@react-navigation/native';

type Props = {}

export default function Accueil(props: Props){
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
    const getFonts = () =>Font.loadAsync({
      'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.otf'),
      'Poppins-Italic': require('../../assets/fonts/Poppins-Italic.otf'),
      'Poppins-SemiBoldItalic': require('../../assets/fonts/Poppins-SemiBoldItalic.otf'),
    });
    const [fontsloaded, setFontsLoaded] = useState(false);
    
    if (fontsloaded) {
        return(
            
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <Header bgTexture={require('../../assets/images/Textures/TEXTURE6.png')} />
                <CarrouselContainer type='category'/>
                <CarrouselContainer type='headline'/>
                <CarrouselContainer type='Today'/>
            </ScrollView>
    )
  } else {
    return (
        <AppLoading
            startAsync={getFonts}
            onFinish={() => {
              setFontsLoaded(true)
            }}
            onError={console.warn}
        />
        );
    }
    
    BackHandler.removeEventListener("hardwareBackPress",()=>true)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50
  }
})
