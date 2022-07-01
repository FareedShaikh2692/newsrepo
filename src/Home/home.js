import { Container, Grid } from "@mui/material";

import React from "react";

import "../App.css";
import Leftpanel from "./leftpanel";
import Rightpanel from "./rightpanel";
const Home = () => {
  return (
    <Container style={{ paddingTop: 20, paddingBottom: 30 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Leftpanel />
        </Grid>
        <Grid item xs={4}>
          <Rightpanel />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
