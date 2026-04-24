import 'leaflet/dist/leaflet.css';
import style from './LeafletMap.module.scss';

import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import LeafletLocationHelper from './LeafletLocationHelper';

export default function LeafletMap() {

    const coordinates: LatLngExpression = [-22.931430713914494, -50.66965230595873];
    const polygon:     LatLngExpression[] = [
        [-22.926850975485713, -50.66962829612472],
        [-22.924835177405242, -50.68099476376794],
        [-22.92859501187617,  -50.68874678921892],
        [-22.932334980206093, -50.68776522683318],
        [-22.956471841418807, -50.6800244391771],
        [-22.954016855936576, -50.66551375596745],
        [-22.954016855936576, -50.66551375596745],
        [-22.953962519737825, -50.66504744345214],
    ];

    const markerIcon = L.icon({
        iconUrl: '/marker.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        className: style.customMarker, // use this to remove default leaflet styling
    });

    return (
        <MapContainer
            center={coordinates}
            zoom={13}
            scrollWheelZoom={true}
            className={style.leafletMap}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={coordinates}
                icon={markerIcon}
            >
                <Popup
                    offset={[0, - 45]}
                >
                    Fazenda Santa Cruz
                </Popup>
            </Marker>

            <Polygon
                positions={polygon}
            >
            </Polygon>

            <LeafletLocationHelper/>
        </MapContainer>
    );
}