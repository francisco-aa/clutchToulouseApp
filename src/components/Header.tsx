import React from 'react';
import { Image, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/RootNavigator';
import HeaderActions from './HeaderActions';

type Props = {
    bgTexture: ImageSourcePropType;
};

/** 
* Clutch Header component
*
* @param {ImageSourcePropType} bgTexture - require('{assets_directory}/textures/{texture_name}.png')
* @return {JSX.Element}
*/
const Header = ({ bgTexture }: Props): JSX.Element => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                resizeMode='cover'
                source={bgTexture}
            >
                <HeaderActions hasBackBtn={false} />
            </ImageBackground>
            <Image
                style={styles.logo}
                source={require('../../assets/logo/Clutch_icon_1.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
    },
    background: {
        height: 150,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop: -50,
        marginBottom: 25,
    }
});

export default Header;