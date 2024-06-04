import MapMarker from "../MapMarker/MapMarker";
import css from "./Map.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const mapCenter = [0, 0];
  return (
      <MapContainer
        center={mapCenter}
        zoom={18}
        scrollWheelZoom={false}
        id={css.map}
        zoomControl={false}
        dragging={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMarker />
      </MapContainer>
  );
};

export default Map;
