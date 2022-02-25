import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

type Props = {
    bgTexture: ImageSourcePropType;
};

const Header = ({ bgTexture }: Props) => {
    return (
        <View>
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
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    background: {
        height: 175,
    },
    logo : {
        alignSelf: 'center',
        marginTop: -50,
        marginBottom: 25
    }
});

export default Header;