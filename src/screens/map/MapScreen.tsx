import React, {Fragment, useEffect} from "react";
import {Map, markerStyle} from "../../components/map/mapView.style";
import {Marker} from "react-native-maps";
import {Image} from "react-native";
import { useGetAllEventsQuery } from "../../api/events.service";

const MapScreen = () => {
    const MapMarkers = () => {
        const {data, error, isLoading, refetch} = useGetAllEventsQuery()
        return (
            <>
                {data && data.map((marker) => (
                    <Fragment key={marker.id}>
                        {
                            marker.location.latitude && marker.location.longitude ?
                                <Marker coordinate={{
                                    latitude: marker.location.latitude,
                                    longitude: marker.location.longitude
                                }}
                                        title={marker.name}
                                        description={"Lieu : " + marker.location.name}
                                >
                                    <Image
                                        style={markerStyle.markerImage}
                                        resizeMode={"contain"}
                                        source={require("../../../assets/images/clutch/markers/Fant_violet.png")}
                                    />
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
