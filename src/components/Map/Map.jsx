import css from "./Map.module.css";
import { MapContainer, TileLayer } from "react-leaflet";
import PropTypes from 'prop-types';

const Map = ({ children }) => {
  const mapCenter = [0, 0];
  return (
      <MapContainer
        center={mapCenter}
        zoom={16}
        scrollWheelZoom={false}
        id={css.map}
        zoomControl={false}
        dragging={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
  );
};

Map.propTypes = {
  children: PropTypes.node.isRequired
}


export default Map;
