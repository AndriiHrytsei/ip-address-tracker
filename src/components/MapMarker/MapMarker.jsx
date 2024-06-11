import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import marker from "../../images/icon-location.svg";

const MapMarker = ({ latLng }) => {
  const map = useMap();

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

export default MapMarker;
