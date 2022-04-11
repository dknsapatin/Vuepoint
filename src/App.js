import React from "react";
import styled from "styled-components";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const Container = styled.div``;

const App = () => {
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
          <Map />
        </Grid>
        {/* ----------------------------------------------------------- */}
      </Grid>
    </>
  );
};

export default App;
