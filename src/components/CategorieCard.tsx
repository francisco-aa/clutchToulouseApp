import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Categorie } from '../types/Categorie'

type Props = {
                categorie:Categorie,
            }
var count:number=0;
//TODO redirection vers les détails 
export default function(props: Props){
    function ticketNB():number{
        if (count < 3) {
            return count += 1
        } else {
            return count = 1
        }
    }
    function getImage(ticketNB:number) {
        switch (ticketNB) {
            case 1:
            return require('../../assets/img/Ticket_1.png')
            case 2:
            return require('../../assets/img/Ticket_2.png')
            case 3:
            return require('../../assets/img/Ticket_3.png')
        }
    }
    return (   
        
        <View style={styles.carrouselCards}>

            <Image style={styles.Ticket}
                source={getImage(ticketNB())}
            />
            <Text style={styles.Titre}>{props.categorie.nom}</Text>
        </View>
  )
}


const styles = StyleSheet.create({
    carrouselCards:{
        flex:1,
        marginRight: 9,
        alignItems:'center',
        justifyContent:'center'
    },
    Ticket:{
        height:87,
        width:143
    },
    Titre:{
        position:'absolute',
        fontFamily:'Poppins-Bold',
        textTransform: 'uppercase',
        fontSize:19,
        color:'white'
    }
})