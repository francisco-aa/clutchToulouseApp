import React, {Fragment, useEffect} from "react";
import {Map, markerStyle} from "../../components/map/mapView.style";
import {Callout, Marker} from "react-native-maps";
import {Image, StyleSheet, Text, View} from "react-native";
import {useGetAllEventsQuery} from "../../api/events.service";
import {inspect} from "util";
import IconRounded from "../components/locationDetails/IconRounded";
import fr from "date-fns/locale/fr";
import {format} from "date-fns";

const styles = {
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#000000',
        marginBottom: 5
    },
    description: {
        fontFamily: 'Poppins-SemiBoldItalic',
        fontSize: 10,
        color: '#000000'
    }
}

const MapScreen = () => {
    const MapMarkers = () => {
        const {data, error, isLoading, refetch} = useGetAllEventsQuery()
        return (
            <>
                {data && data.map((marker) => (
                    new Date(marker.start_date) === new Date() && <Fragment key={marker.id}>
                        {
                            marker.location.latitude && marker.location.longitude ?
                                <Marker coordinate={{
                                    latitude: marker.location.latitude,
                                    longitude: marker.location.longitude
                                }}
                                        title="Titre"
                                        description="description"
                                >
                                    {marker.category === 1 &&
                                        <Image
                                            style={markerStyle.markerImage}
                                            resizeMode={"contain"}
                                            source={require("../../../assets/images/clutch/markers/Fant_violet.png")}
                                        />
                                    }{marker.category === 2 &&
                                    <Image
                                        style={markerStyle.markerImage}
                                        resizeMode={"contain"}
                                        source={require("../../../assets/images/clutch/markers/Fant_bleu.png")}
                                    />
                                }{marker.category === 3 &&
                                    <Image
                                        style={markerStyle.markerImage}
                                        resizeMode={"contain"}
                                        source={require("../../../assets/images/clutch/markers/Fant_black.png")}
                                    />
                                }{marker.category === 4 &&
                                    <Image
                                        style={markerStyle.markerImage}
                                        resizeMode={"contain"}
                                        source={require("../../../assets/images/clutch/markers/Fant_jaune.png")}
                                    />
                                }{marker.category === 5 &&
                                    <Image
                                        style={markerStyle.markerImage}
                                        resizeMode={"contain"}
                                        source={require("../../../assets/images/clutch/markers/Fant_rose.png")}
                                    />
                                }
                                    <Callout>
                                        <View style={markerStyle.popup}>
                                            <Text style={styles.title}>{marker.name}</Text>
                                            <Text style={styles.description}>
                                                {"Lieu : " + marker.location.name}</Text>
                                            <Text
                                                style={styles.description}>{"Date : " + format(new Date(marker.start_date), 'PP', {locale: fr})}</Text>
                                            <Text
                                                style={styles.description}>{"Heure : " + format(new Date(marker.start_date), 'hh:mm', {locale: fr})}</Text>
                                        </View>
                                    </Callout>
                                </Marker> : null
                        }
                    </Fragment>
                ))
                }
            </>
        )
    }
    return (
        <>
            <Map
                initialRegion={{
                    latitude: 43.604466,
                    longitude: 1.442929,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                <MapMarkers/>
            </Map>
        </>
    )
}

export default MapScreen
