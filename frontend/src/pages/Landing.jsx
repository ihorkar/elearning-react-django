import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { getAllCourses } from "../redux/courses/courseActions";
import { getDiscounts } from "../redux/discounts/discountActions";
import { useModal } from "../context/ModalContext";

import students from "../assets/students.webp";
import Services from "../components/Services";
import Carousel from "../components/Carousel";
import Partners from "../components/Partners";

export default function Landing() {
  const { openModal } = useModal();
  const { user } = useSelector((state) => state.auth);
  const {
    courses,
    loading: courseLoading,
    error: courseError,
  } = useSelector((state) => state.course);
  const { discounts } = useSelector((state) => state.discount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDiscounts());
  }, [dispatch]);

  // console.log(courses);

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
          <Typography variant="h1" align="left" color="text.main">
            Up your{" "}
            <Box component="span" color="text.primary">
              Skills
            </Box>{" "}
            <br /> to{" "}
            <Box component="span" color="text.primary">
              Advance
            </Box>{" "}
            your
            <br />
            <Box component="span" color="text.primary">
              Career
            </Box>{" "}
            path
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2 }}
            align="left"
            gutterBottom
          >
            Provides you with the latest online learning system and material{" "}
            <br />
            that help your knowledge grow.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            {!user && (
              <Button
                onClick={() => openModal("signup")}
                variant="contained"
                color="primary"
              >
                Get Started
              </Button>
            )}
            <Button
              component={RouterLink}
              to="/about"
              variant="outlined"
              color="primary"
            >
              Learn More
            </Button>
          </Stack>
        </Grid>
        <Grid sx={{ display: { xs: "none", sm: "block" } }} item xs={12} md={6}>
          <img src={students} alt="landing" width="100%" height="100%" />
        </Grid>
      </Grid>
      <Grid container sx={{ padding: "1rem" }}>
        <Grid item xs={8}>
          <Partners />
        </Grid>
      </Grid>
      <Grid container sx={{ padding: "1rem" }}>
        <Grid item xs={12}>
          <Carousel discountData={discounts} />
        </Grid>
      </Grid>
      <Grid container sx={{ padding: "1rem" }}>
        <Grid item xs={12} md={12}>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            color="text.primary"
          >
            Our Services
          </Typography>
          <Typography variant="h2" color="text.dark" align="center">
            Fostering an engaging learning environment
          </Typography>
          <Services />
        </Grid>
      </Grid>
      {courses && (
        <Grid container sx={{ padding: "1rem" }}>
          <Grid item xs={12} md={12}>
            <Typography gutterBottom variant="h5" color="text.primary">
              Explore Programmes
            </Typography>
            <Typography gutterBottom variant="h2" color="text.main">
              Our Popular Classes
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ color: "text.secondary" }}
            >
              Let's join our famous class, the knowledge provided will
              definitely be useful for you.
            </Typography>
            <Carousel
              courseData={courses}
              loading={courseLoading}
              error={courseError}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
