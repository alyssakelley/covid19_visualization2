import "https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.js"; // link to the api for the map visualization
import styles from 'https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.css';


    // this will be your own token when you create your account with mapbox which can be done here: https://www.mapbox.com
    const mapbox_token =
    "pk.eyJ1IjoiYWx5c3Nha2VsbGV5OTciLCJhIjoiY2thYXBibndoMDR0ODJ5bzE4ZXloYmw1bSJ9.Rpz4n2W1YB4NBvCQJA3vew";

    mapboxgl.accessToken = mapbox_token;

    var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    zoom: 1.5,
    center: [0, 20]
    });

    const getColorFromCount = count => {
    if (count >= 100) {
        return "red";
    }
    if (count >= 10) {
        return "blue";
    }
    return "gray";
    };

    fetch("/get-latest.json")
    .then(response => response.json())
    .then(data => {
        // const places = data.places;
        // const reports = data.reports;
        const { places, reports } = data;

        reports
        .filter(report => !report.hide)
        .forEach(report => {
            const { infected, placeId } = report;
            const currentPlace = places.find(place => place.id === placeId);
            console.log(infected, currentPlace);
            new mapboxgl.Marker({
            color: getColorFromCount(infected)
            })
            .setLngLat([currentPlace.longitude, currentPlace.latitude])
            .addTo(map);
        });
    });