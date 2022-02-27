import AppLoading from 'expo-app-loading';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Font from 'expo-font';
import CategorieCard from '../components/CategorieCard';
import { dataAccess } from '../data/dataAccess';
import { Categorie } from '../types/Categorie';

type Props = {}

export default function Acceuil(props: Props){
    const getFonts = () =>Font.loadAsync({
      'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.otf'),
    });
    const [fontsloaded, setFontsLoaded] = useState(false);
    
    if (fontsloaded) {
        const categories:Categorie[] =  new dataAccess().getcategorie()
        const renderCategorieCard:ListRenderItem<Categorie>=({item})=>{
            return <CategorieCard categorie={item} />
        }
        return(
            <View style={styles.container}>
                <View style={styles.carrouselContainer}>
                    <Text style={styles.carrouselTitle} >Catégories</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} renderItem={renderCategorieCard}/>
                </View>
                <View style={styles.carrouselContainer}>
                    <Text style={styles.carrouselTitle} >Catégories</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} renderItem={renderCategorieCard}/>
                </View>
                <View style={styles.carrouselContainer}>
                    <Text style={styles.carrouselTitle} >Catégories</Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} renderItem={renderCategorieCard}/>
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