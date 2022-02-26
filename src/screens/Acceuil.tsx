import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Font from 'expo-font';

type Props = {}

export default function Acceuil(props: Props){
  const getFonts = () =>Font.loadAsync({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.otf'),
  });
    const [fontsloaded, setFontsLoaded] = useState(false);
  if (fontsloaded) {
        return(
            <View style={styles.container}>
                <View style={styles.carrouselContainer}>
                    <Text style={styles.carrouselTitle} >Catégories</Text>
                </View>
                <View style={styles.carrouselContainer}>
                    <Text style={styles.carrouselTitle}>Catégories</Text>
                </View>
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
    carrouselContainer:{
        flex: 1,
        marginLeft:15
    },
    carrouselTitle:{
        fontFamily:'Poppins-Bold',
        textTransform: 'uppercase',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:16
    },
});