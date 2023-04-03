import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
// import students from "../assets";
import students from "../assets/students.webp";
import Services from "./Services";
import Classes from "./Classes";

export default function Landing() {
  return (
    <>
      <Grid
        container
        sx={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, color: "primary.main" }}
            align="left"
          >
            Up your Skills <br /> to Advance your <br /> career path
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2 }}
            align="left"
          >
            Provides you with the latest online learning system and material{" "}
            <br />
            that help your knowledge grow.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
            <Button variant="outlined" color="primary">
              Learn More
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={students} alt="landing" width="100%" height="100%" />
        </Grid>
      </Grid>
      <Services />
      <Classes />
    </>
  );
}