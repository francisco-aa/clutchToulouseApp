import React, {FC} from "react";
import {StyleSheet} from "react-native";
import {View, ActivityIndicator} from "react-native";

type TLoading = {
    color: string
}
const Loading: FC<TLoading> = ({color}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center"
        },
        horizontal: {
            flexDirection: "row",
            justifyContent: "center",
            padding: 10
        }
    });

    return (

        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={color} />
        </View>
    )
}

export default Loading