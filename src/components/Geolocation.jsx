import { useGeolocated } from "react-geolocated";

export function Geolocation () {

    const { coords, isGeolocationAvailable } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    
    if (!isGeolocationAvailable) {
        console.log("Browser does not support Geolocation");
        return;
    }

    return coords

}