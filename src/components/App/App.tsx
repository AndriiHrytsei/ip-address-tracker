import Map from "../Map/Map";
import Form from "../Form/Form";
import Layout from "../Layout/Layout";
import { useState } from "react";
import MapMarker from "../MapMarker/MapMarker";

type LatLng = [number, number]

const App = () => {
  const [latLng, setLatLng] = useState<LatLng>([0, 0]);

  return (
    <Layout>
      <Form getLatLng={(data: [number, number]): void => setLatLng(data)} />
      <Map>
        <MapMarker latLng={latLng} />
      </Map>
    </Layout>
  );
};

export default App;
