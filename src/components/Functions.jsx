import { useGeolocated } from "react-geolocated";

const Geolocation = () => {

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

const FormatDate = (date) => {

    let d = new Date(date);
    let month = (d.getMonth() + 1);
    let day = d.getDate();

    if (day.length < 2) {
        day = '0' + day;
    }
    return [year, month, day].join('-');

}

export {
    Geolocation,
    FormatDate
}