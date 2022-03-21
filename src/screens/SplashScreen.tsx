import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/RootNavigator';

type Props = {}

//TODO test


/**
 * 
 * @param props 
 * @returns SplashScreen
 */
export default function SplashScreen(props: Props){
  const startAnimation=useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const navigation=useNavigation<NativeStackNavigationProp<RouteParams>>();
  const [stateCblack, setstateCblack] = useState(false)
  const [stateL, setstateL] = useState(false)
  const [stateU, setstateU] = useState(false)
  const [stateT, setstateT] = useState(false)
  const [stateC, setstateC] = useState(false)
  const [stateH, setstateH] = useState(false)
  setTimeout(() => {
    setstateL(true)
  }, 250);
  setTimeout(() => {
    setstateU(true)
  }, 500);
  setTimeout(() => {
    setstateT(true)
  }, 750);
  setTimeout(() => {
    setstateC(true)
  }, 1000);
  setTimeout(() => {
    setstateH(true)
    setstateCblack(true)
  }, 1250);


  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
          Animated.timing(
              startAnimation,
              {
                  toValue:{
                            x:  0,
                            y: -Dimensions.get('window').height/2+70,
                        },
                  useNativeDriver: true
              }
          ),
      ]).start();
    }, 1500);
  }, [])


  setTimeout(() => {
    navigation.navigate('Acceuil')
  }, 2650);
  return (
    <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,paddingHorizontal:'10%',justifyContent:'center'}}>
        <Animated.View style={{alignItems:'center',flexDirection:'row',
                transform: [
                    { translateY: startAnimation.y },
                    { translateX: startAnimation.x }
                ]}}>
             {stateCblack ? <Image style={{top:10}} source={require('../../assets/img/Clutch_icon_black.png')}/>
                    : <Image style={{top:10}} source={require('../../assets/img/Clutch_icon_green.png')}/>}
            {stateL ? <Text style={styles.lettres}>l</Text>:<Text></Text>}
            {stateU ? <Text style={styles.lettres}>u</Text>:<Text></Text>}
            {stateT ? <Text style={styles.lettres}>t</Text>:<Text></Text>}
            {stateC ? <Text style={styles.lettres}>c</Text>:<Text></Text>}
            {stateH ? <Text style={styles.lettres}>h</Text>:<Text></Text>}
        </Animated.View>
    </View>
  )
}
const styles = StyleSheet.create({
  lettres:{fontSize:120,fontWeight:'bold'}
})
