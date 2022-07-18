import React, {FC, useEffect, useRef} from "react";
import {Map} from "./preventView.style"
import {LatLng, MapViewProps, Marker} from "react-native-maps";

type TPreventViewAdress = {
    coordinate: LatLng
}
const PreventViewAdress: FC<TPreventViewAdress> = ({coordinate}) => {

    const mapRef = useRef<MapViewProps>(null)

    useEffect(() => {
        mapRef.current.animateCamera({center: { latitude: coordinate.latitude, longitude: coordinate.longitude}, zoom: 16})
    }, [coordinate])
    return (
        <Map ref={mapRef}>
            <Marker coordinate={coordinate}/>
        </Map>
    )
}

export default PreventViewAdress
