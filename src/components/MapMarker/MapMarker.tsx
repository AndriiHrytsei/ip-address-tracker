import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import marker from "../../images/icon-location.svg";
import L from 'leaflet'
import LatLng from "../../types/latLng";


const MapMarker = ({ latLng }: {latLng: LatLng}) => {
  const map: L.Map = useMap();

  // eslint-disable-next-line no-undef
  const myIcon: L.Icon<L.IconOptions> = L.icon({
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
