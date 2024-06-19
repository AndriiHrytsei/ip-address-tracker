import css from "./Map.module.css";
import { MapContainer, TileLayer } from "react-leaflet";
import React from "react";

const Map = ({ children }: {children: React.ReactNode}) => {
  const mapCenter: [number, number] = [0, 0];
  return (
      <MapContainer
        center={mapCenter}
        zoom={13}
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


export default Map;
