import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Category } from '../types/Category'

type Props = {
                category:Category,
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
            <Image style={styles.Ticket}
                source={getImage(ticketNB())}
            />
            <Text style={styles.Title}>{props.category.name}</Text>
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
    Title:{
        position:'absolute',
        fontFamily:'Poppins-Bold',
        textTransform: 'uppercase',
        fontSize:19,
        color:'white'
    }
})