import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { RouteParams } from "../navigation/RootNavigator";

type Props = {
    hasBackBtn: boolean;
};

export default function HeaderActions({ hasBackBtn }: Props) {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    if (hasBackBtn) {
        return (
            <View style={styles.headerActions}>
                <Pressable
                    onPress={() => navigation.goBack()}
                >
                    <Image source={require('../../assets/img/Arrow_up.png')} />
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.headerActions}>
            <Pressable
                onPress={() => navigation.navigate('Favorites')}
            >
                <Image source={require('../../assets/img/Menu/Wishlist.png')} />
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