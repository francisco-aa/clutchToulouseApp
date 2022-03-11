import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Event } from '../types/Event';

type Props = {
    event:Event
}
var countTicket:number=0;
var countTitle:number=0;
export default function EventCarrouselCard(props: Props){
    function ticketNB():number{
        if (countTicket <= 3) {
            return countTicket += 1
        } else {
            return countTicket = 1
        }
    }
    function titleNB():number{
        if (countTitle <= 3) {
            return countTitle += 1
        } else {
            return countTitle = 1
        }
    }

    function getColor(NB:number) {
        switch (NB) {
            case 1:
            return "#625A96"
            case 2:
            return "#00ADBB"
            case 3:
            return "#FA4E74"
            case 4:
            return "#F8BC43"
        }
    }
  return (
        <View style={{backgroundColor:getColor(ticketNB()),flex:1,height:97,width:160, marginRight: 9,alignItems:'center'}}>
            <View style={styles.titleZone}>
                <Text style={{position:'absolute',color:getColor(titleNB()), textAlign: 'center',fontFamily:'Poppins-Bold',textTransform: 'uppercase',fontSize:19,margin:2}}>{props.event.name}</Text>
            </View>
            <Image style={styles.image} source={require('../../assets/img/Fant_white.png')}/>
        </View>
  )
}


const styles = StyleSheet.create({
    carrouselCards:{
        marginRight: 9,
        justifyContent:'center'
    },
    titleZone:{
        backgroundColor:'white',
        flex:1,
        height:62,
        width:152,
        top:4,
        justifyContent:'center',
        alignItems:'center'
       
    },
    image:{
        flex:1,
        height:17.96,
        width:23.51,
        resizeMode: 'contain',
        top:2
    }
})