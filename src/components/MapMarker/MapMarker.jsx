/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
// import { ReactComponent as LocIcon } from "../../images/icon-location.svg";

const MapMarker = () => {
  const [pos, setPos] = useState(null);

  const map = useMap();

  const myIcon = L.icon({
    iconUrl: "/ip-address-tracker/src/images/icon-location.svg",
  })

  useEffect(() => {
    map.locate().on("locationfound", (e) => {
      setPos(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  }, [map]);

  return pos === null ? null : (
    <Marker position={pos} icon={myIcon}></Marker>
  );
};

export default MapMarker;
