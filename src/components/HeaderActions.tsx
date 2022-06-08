import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { RouteParams } from "../navigation/RootNavigator";

type Props = {
    hasBackBtn: boolean;
};

export default function HeaderActions({ hasBackBtn }: Props) {
    const [icon, setIcon] = useState(hasBackBtn ? require('../../assets/images/Arrow_up.png') : require('../../assets/images/Menu/Wishlist.png'));
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    const handleAction = () => {
        if (hasBackBtn) {
            return navigation.goBack();
        }

        return navigation.navigate('Favorites');
    }

    return (
        <View style={styles.headerActions}>
            <Pressable onPress={handleAction}>
                <Image source={icon} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    headerActions: {
        width: '100%',
        position: 'absolute',
        top: 10,
        paddingHorizontal: 10
    }
});