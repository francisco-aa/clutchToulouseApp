import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icategory from '../redux/slices/Icategory'

type Props = {
    category: Icategory,
}
var count:number=0;
//TODO redirection vers les détails 
// TODO test du composant 
export default function CategoryCarrouselCard(props: Props){
    function ticketNB():number{
        if (count <= 3) {
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
            case 4:
            return require('../../assets/img/Ticket_4.png')
        }
    }
    return (   
        
        <View style={styles.carrouselCards}>
            <Image style={styles.ticket}
                source={getImage(ticketNB())}
            />
            <Text style={styles.title}>{props.category.name}</Text>
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
    ticket:{
        height:87,
        width:143
    },
    title:{
        position:'absolute',
        fontFamily:'Poppins-Bold',
        textTransform: 'uppercase',
        fontSize:17,
        color:'white',
        margin:15
    }
})