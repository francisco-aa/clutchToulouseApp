import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

type Props = {};

export default function Favorites({ }: Props) {
    const navigation = useNavigation();

    const FavHeader = () => (
        <View style={styles.headerContainer}>
            <View style={styles.headerActions}>
                <Pressable
                    onPress={() => navigation.goBack()}
                >
                    <Image source={require('../../assets/img/Arrow_up.png')} />
                </Pressable>
            </View>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>ENVIES</Text>
                <Image source={require('../../assets/img/Clutch_signature.png')} />
            </View>
        </View>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                <FavHeader />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0
    },
    headerActions: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    headerTitleContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 25,
        fontFamily: 'Poppins-Bold'
    }
});