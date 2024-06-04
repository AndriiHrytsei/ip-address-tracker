import { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import marker from "../../images/icon-location.svg"

const MapMarker = () => {
  const [pos, setPos] = useState([0, 0]);
  const map = useMap();

  const myIcon = L.icon({
    iconUrl: marker,
  });

  useEffect(() => {
    map.locate().on("locationfound", (e) => {
      setPos(e.latlng);
      map.setView(e.latlng, map.getZoom());
    });
  }, [map]);

  return pos === null ? null : <Marker position={pos} icon={myIcon}></Marker>;
};

export default MapMarker;
