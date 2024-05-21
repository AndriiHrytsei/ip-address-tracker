import MapMarker from "../MapMarker/MapMarker";
import css from "./Map.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const mapCenter = [0, 0]

  // Update the map view when the center prop changes
  return (
    <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={true} id={css.map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarker />
    </MapContainer>
  );
};

export default Map;
