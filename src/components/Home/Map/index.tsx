import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { useState } from "react";
import { useEffect } from "react";

const coordinates = { lat: 59.92805839835617, lng: 10.846220754023395 };

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD71ot-ASzM3bNCQPwN-8uiOj8TRaQUN10&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={16.5} defaultCenter={coordinates}>
    {props.isMarkerShown && <Marker position={coordinates} />}
  </GoogleMap>
));

export default function Map() {
  // const [isMarkerShown, setIsMarkerShown] = useState(false);
  const [isMarkerShown, setIsMarkerShown] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsMarkerShown(true), 2000);
  // }, []);

  return <MyMapComponent isMarkerShown={isMarkerShown} />;
}
