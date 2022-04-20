import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import { getPlacesData } from "./API/index";

const App = () => {
  //--------------------------------------------------------------------------------

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  //--------------------------------------------------------------------------------
  // Call back function to set the current location to our own lat | lng coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  //--------------------------------------------------------------------------------
  // This useEffect allows users to use the rating selection and filters out from each type (Restaurant/Hotels/Activities)
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);
  //--------------------------------------------------------------------------------

  useEffect(() => {
    // Refer from index.js to call the async function getPlacesData
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }, [type, coords, bounds]);
  //--------------------------------------------------------------------------------

  return (
    <>
      <CssBaseline />
      <Header />

      <Grid container spaceing={3} style={{ width: "100%" }}>
        {/* ----------------------------------------------------------- */}
        {/* Only take 4 out of 12 spaces on medium or larger devices */}
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        {/* ----------------------------------------------------------- */}
        <Grid item xs={12} md={8}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            // weatherData={weatherData}
          />
        </Grid>
        {/* ----------------------------------------------------------- */}
      </Grid>
    </>
  );
};

export default App;
