import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL,{ScaleControl,NavigationControl,Marker,GeolocateControl,AttributionControl} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYm9id2F0Y2hlcngiLCJhIjoiY2t5dmo1MXh4MXlhcTJwbzc4ZTdxMGlmcSJ9.T_TMwHTxa9qNkHRwAPtIlA'; // Set your mapbox token here
const scaleControlStyle= {
  left: 20,
  bottom: 100
};
const attributionStyle= {
  right: 0,
  top: 0
};
const navControlStyle= {
  right: 10,
  top: 10
};
const geolocateControlStyle = {
  right: 10,
  top: 10
};

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/bobwatcherx/ckyviyelh003b14ql181odx71"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
          <NavigationControl style={navControlStyle} />
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />
       <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
    <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
        <div><h1>You are here</h1></div>
      </Marker>
       <AttributionControl compact={true} style={attributionStyle} />
    </MapGL>
  );
}