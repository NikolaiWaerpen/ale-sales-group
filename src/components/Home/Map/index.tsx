import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { useState } from "react";
import { useEffect } from "react";

const COORDINATES = { lat: 59.92805839835617, lng: 10.846220754023395 };
const API_KEY = "AIzaSyCd13m4sCPKcuU3y5CgZR846dFlmp06zhI";

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={11.2} defaultCenter={COORDINATES}>
    {props.isMarkerShown && <Marker position={COORDINATES} />}
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
