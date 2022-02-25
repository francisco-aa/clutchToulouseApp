import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

// Todo: add favorites button and settings button (if needed)

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
    return (
        <View style={styles.container}>
            <Image
                style={styles.background}
                source={bgTexture}
            />
            <Image
                style={styles.logo}
                source={require('../assets/logo/Clutch_icon_1.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    background: {
        height: 175,
    },
    logo : {
        marginTop: -50,
        marginBottom: 25
    }
});

export default Header;