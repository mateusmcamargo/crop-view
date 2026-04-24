import { useMapEvents } from 'react-leaflet';

export default function LeafletLocationHelper() {
    useMapEvents({
        click(event) {
            console.log("lat:" + event.latlng.lat);
            console.log("lng:" + event.latlng.lng);
        }
    });

    return null;
}