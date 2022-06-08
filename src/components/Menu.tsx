import { Image, StyleSheet, Button, View, TouchableHighlight } from 'react-native';
import React, { useState }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { RouteParams } from '../navigation/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type Props = {}

export default function Menu(props: Props){
    const navigation=useNavigation<NativeStackNavigationProp<RouteParams>>();
    const [state, setState] = useState({Home:true,Search:false,Agenda:false,Map:false,Notification:false,Book:false})
    const [show, setshow] = useState(false)

    setTimeout(() => {
        setshow(true)
    }, 2645);
    /**
     *
     * @param screenName
     * @returns get normal or active image dependeing the state
     */
    function getImage(screenName:("Home"|"Search"|"Agenda"|"Map"|"Notification"|"Book")){
        switch(screenName){
            case "Home" :
                if(state.Home){
                    return <Image source={require('../../assets/images/Menu/Home_active.png')}/>
                }else{
                    return <Image source={require('../../assets/images/Menu/Home.png')}/>
                }
            case "Search":
                if(state.Search){
                    return <Image source={require('../../assets/images/Menu/Search_active.png')}/>
                }else{
                    return <Image source={require('../../assets/images/Menu/Search.png')}/>
                }
            case "Agenda":
                if(state.Agenda){
                    return <Image source={require('../../assets/images/Menu/Agenda_active.png')}/>
                }else{
                    return <Image source={require('../../assets/images/Menu/Agenda.png')}/>
                }
            case "Map":
                if(state.Map){
                    return <Image source={require('../../assets/images/Menu/Map_active.png')}/>
                }else{
                    return <Image source={require('../../assets/images/Menu/Map.png')}/>
                }
            case "Notification":
                if(state.Notification){
                    return <Image source={require('../../assets/images/Menu/Notification_active.png')}/>
                }else{
                    return <Image source={require('../../assets/images/Menu/Notification.png')}/>
                }
            case "Book":
                if(state.Book){
                    return <Image source={require('../../assets/images/Menu/Book_active.png')}/>
                }else{
                    return <Image source={require('../../assets/images/Menu/Book.png')}/>
                }
        }
    }

  return (
    <View style={styles.menuContainer}>
        {show ?
        <View style={styles.menubackground}>
            <TouchableHighlight
            onPress={()=>{
                navigation.navigate('Acceuil');
                setState(state => ({
                     ...state, Home:true, Search:false, Agenda:false,
                      Map:false, Notification:false, Book:false})
                      )
                }
            }>
                {getImage("Home")}
            </TouchableHighlight>
            <TouchableHighlight
            onPress={()=>{
                navigation.navigate('Search');
                setState(state => ({
                     ...state, Home:false, Search:true, Agenda:false,
                      Map:false, Notification:false, Book:false})
                      )
                }
            }>
                {getImage("Search")}
            </TouchableHighlight>
            <TouchableHighlight
            onPress={()=>{
                navigation.navigate('Agenda');
                setState(state => ({
                     ...state, Home:false, Search:false, Agenda:true,
                      Map:false, Notification:false, Book:false})
                      )
                }
            }>
                {getImage("Agenda")}
            </TouchableHighlight>
            <TouchableHighlight
            onPress={()=>{
                navigation.navigate('Map');
                setState(state => ({
                     ...state, Home:false, Search:false, Agenda:false,
                      Map:true, Notification:false, Book:false})
                      )
                }
            }>
                {getImage("Map")}
            </TouchableHighlight>
            <TouchableHighlight
            onPress={()=>{
                navigation.navigate('Notification');
                setState(state => ({
                     ...state, Home:false, Search:false, Agenda:false,
                      Map:false, Notification:true, Book:false})
                      )
                }
            }>
                {getImage("Notification")}
            </TouchableHighlight>
            <TouchableHighlight
            onPress={()=>{
                navigation.navigate('Book');
                setState(state => ({
                     ...state, Home:false, Search:false, Agenda:false,
                      Map:false, Notification:false, Book:true})
                      )
                }
            }>
                {getImage("Book")}
            </TouchableHighlight>
        </View>:<View></View>}
    </View>
  )
}

const styles = StyleSheet.create({
    menuContainer:{
        position:'absolute',
        backgroundColor:"transparent",
        height:53,
        width:'100%',
        bottom:0
    },
    menubackground:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:"black",
        height:"100%",
        margin:6,
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    }
})
