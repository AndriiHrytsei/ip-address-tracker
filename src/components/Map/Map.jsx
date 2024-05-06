import css from "./Map.module.css";
import { MapContainer, TileLayer} from "react-leaflet";
import MapMarker from "../MapMarker/MapMarker";


const Map = () => {
  const position = [0, 0];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      id={css.map}
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
