import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import { getPlacesData } from "./API/index";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  // Call back function to set the current location to our own lat | lng coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    // Refer from index.js to call the async function getPlacesData
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />

      <Grid container spaceing={3} style={{ width: "100%" }}>
        {/* ----------------------------------------------------------- */}
        {/* Only take 4 out of 12 spaces on medium or larger devices */}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        {/* ----------------------------------------------------------- */}
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setbounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
        {/* ----------------------------------------------------------- */}
      </Grid>
    </>
  );
};

export default App;
