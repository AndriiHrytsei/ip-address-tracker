import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import marker from "../../images/icon-location.svg";
import L from 'leaflet'


const MapMarker = ({ latLng }: {latLng: [number, number]}) => {
  const map = useMap();

  // eslint-disable-next-line no-undef
  const myIcon = L.icon({
    iconUrl: marker,
  });

  useEffect(() => {
    map.flyTo(latLng, map.getZoom());
  }, [map, latLng]);

  return latLng === null ? null : (
    <Marker position={latLng} icon={myIcon}></Marker>
  );
};

export default MapMarker;
