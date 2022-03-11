import AppLoading from 'expo-app-loading';
import {ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import * as Font from 'expo-font';
import CarrouselContainer from '../components/CarrouselContainer';
import Header from '../components/Header';

type Props = {}

export default function Acceuil(props: Props){
    const getFonts = () =>Font.loadAsync({
      'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.otf'),
    });
    const [fontsloaded, setFontsLoaded] = useState(false);
    
    if (fontsloaded) {
        return(
            
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
                <Header bgTexture={require('../../assets/textures/TEXTURE6.png')} />
                <CarrouselContainer type='category'/>
                <CarrouselContainer type='headline'/>
                <CarrouselContainer type='Today'/>
                <CarrouselContainer type='Today'/>
            </ScrollView>
        )
    } else {
        return (
        <AppLoading
            startAsync={getFonts}
            onFinish={() => {
            setFontsLoaded(true);
            }}
            onError={console.warn}
        />
        );
    } 
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});