import { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";

const MapMarker = () => {
  const [pos, setPos] = useState([0, 0]);
  const map = useMap();

  const myIcon = L.icon({
    iconUrl: "/ip-address-tracker/src/images/icon-location.svg",
  });

  useEffect(() => {
    map.locate().on("locationfound", (e) => {
      setPos(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return pos === null ? null : <Marker position={pos} icon={myIcon}></Marker>;
};

export default MapMarker;
