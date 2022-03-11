import AppLoading from 'expo-app-loading';
import {StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import * as Font from 'expo-font';
import CarrouselContainer from '../components/CarrouselContainer';

type Props = {}

export default function Acceuil(props: Props){
    const getFonts = () =>Font.loadAsync({
      'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.otf'),
    });
    const [fontsloaded, setFontsLoaded] = useState(false);
    
    if (fontsloaded) {
        return(
            <View style={styles.container}>
                <CarrouselContainer type='category'/>
                <CarrouselContainer type='headline'/>
                <CarrouselContainer type='Today'/>
            </View>
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
    },
    
});