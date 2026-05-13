import 'leaflet/dist/leaflet.css';
import style from './LeafletMap.module.scss';

import {
    MapContainer,
    Marker,
    Polygon,
    Popup,
    TileLayer,
} from 'react-leaflet';

import { LatLngExpression } from 'leaflet';
import L from 'leaflet';

import LeafletLocationHelper from './LeafletLocationHelper';

export default function LeafletMap() {

    const coordinates: LatLngExpression = [-22.931430713914494, -50.66965230595873];

    // Talhão 01
    const talhaoSul: LatLngExpression[] = [
        [-22.926850975485713, -50.66962829612472],
        [-22.924835177405242, -50.68099476376794],
        [-22.92859501187617,  -50.68874678921892],
        [-22.932334980206093, -50.68776522683318],
        [-22.956471841418807, -50.6800244391771],
        [-22.954016855936576, -50.66551375596745],
        [-22.953962519737825, -50.66504744345214],
    ];

    // Talhão 02
    const talhaoNorte: LatLngExpression[] = [
        [-22.919604, -50.673440],
        [-22.918112, -50.679221],
        [-22.921504, -50.682548],
        [-22.924638, -50.679412],
        [-22.923091, -50.672825],
    ];

    // Talhão 03
    const talhaoLeste: LatLngExpression[] = [
        [-22.934128, -50.659440],
        [-22.931871, -50.654290],
        [-22.936003, -50.650742],
        [-22.940117, -50.653940],
        [-22.939202, -50.659010],
    ];

    // Talhão 04
    const talhaoOeste: LatLngExpression[] = [
        [-22.939944, -50.691488],
        [-22.937150, -50.697012],
        [-22.942328, -50.700115],
        [-22.946705, -50.695924],
        [-22.944311, -50.690204],
    ];

    const markerIcon = L.icon({
        iconUrl: '/marker.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        className: style.customMarker,
    });

    return (
        <MapContainer
            center={coordinates}
            zoom={13}
            scrollWheelZoom={true}
            className={style.leafletMap}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker
                position={coordinates}
                icon={markerIcon}
            >
                <Popup offset={[0, -45]}>
                    Fazenda Santa Cruz
                </Popup>
            </Marker>

            {/* Talhão Sul */}
            <Polygon
                positions={talhaoSul}
                pathOptions={{
                    color: '#00FF9C',
                    fillColor: '#00FF9C',
                    fillOpacity: 0.18,
                }}
            >
                <Popup>
                    Talhão Sul
                </Popup>
            </Polygon>

            {/* Talhão Norte */}
            <Polygon
                positions={talhaoNorte}
                pathOptions={{
                    color: '#574AE2',
                    fillColor: '#574AE2',
                    fillOpacity: 0.18,
                }}
            >
                <Popup>
                    Talhão Norte
                </Popup>
            </Polygon>

            {/* Talhão Leste */}
            <Polygon
                positions={talhaoLeste}
                pathOptions={{
                    color: '#F5A623',
                    fillColor: '#F5A623',
                    fillOpacity: 0.18,
                }}
            >
                <Popup>
                    Talhão Leste
                </Popup>
            </Polygon>

            {/* Talhão Oeste */}
            <Polygon
                positions={talhaoOeste}
                pathOptions={{
                    color: '#EB5160',
                    fillColor: '#EB5160',
                    fillOpacity: 0.18,
                }}
            >
                <Popup>
                    Talhão Oeste
                </Popup>
            </Polygon>

            <LeafletLocationHelper />
        </MapContainer>
    );
}