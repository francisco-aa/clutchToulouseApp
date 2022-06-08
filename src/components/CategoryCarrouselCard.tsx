import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icategory from '../redux/slices/Icategory'

type Props = {
    category: Icategory,
}

export default function CategoryCarrouselCard(props: Props){

    function getImage(categoryID:number) {
        switch (categoryID) {
            case 1:
                return require('../../assets/images/tickets/Ticket_2.png')
            case 2:
                return require('../../assets/images/tickets/Ticket_1.png')
            case 3:
                return require('../../assets/images/tickets/Ticket_3.png')
            case 4:
                return require('../../assets/images/tickets/Ticket_4.png')
            case 5:
                return require('../../assets/images/tickets/Ticket_1.png')
        }
    }
    return (   
        
        <View style={styles.carrouselCards}>
            <Image style={styles.ticket}
                source={getImage(parseInt(props.category.id))}
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