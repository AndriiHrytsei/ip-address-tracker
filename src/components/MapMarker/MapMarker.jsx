import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import marker from "../../images/icon-location.svg";
import PropTypes from 'prop-types';

const MapMarker = ({ latLng }) => {
  const map = useMap();

  // eslint-disable-next-line no-undef
  const myIcon = L.icon({
    iconUrl: marker,
  });

  useEffect(() => {
    map.setView(latLng, map.getZoom());
  }, [map, latLng]);

  return latLng === null ? null : (
    <Marker position={latLng} icon={myIcon}></Marker>
  );
};

MapMarker.propTypes = {
  latLng: PropTypes.array.isRequired
}

export default MapMarker;
