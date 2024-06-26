import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { signInWithGoogle } from "../redux/auth/authActions";

import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Google, Facebook, LockOutlined } from "@mui/icons-material";

const AccountSignin = () => {
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  console.log(user, loading, error);

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    if (!user) {
      dispatch(signInWithGoogle());
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/profile", { replace: true });
    }
  }, [user, navigate]);

  const handleFacebookSignIn = () => {
    // Handle Facebook sign in
    alert("Facebook sign in not yet available");
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Paper sx={{ my: 2, py: 2 }} elevation={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              my: 2,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Divider sx={{ width: "100%", my: 2 }} />
            <Typography
              component="h5"
              variant="body2"
              align="center"
              gutterBottom
              sx={{ width: "300px" }}
            >
              Unlock a world of possibilities! Sign in with your favorite
              platform to embark on an incredible journey.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              my: 2,
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              //   fullWidth
              onClick={handleGoogleSignIn}
              startIcon={<Google />}
            >
              Sign in with Google
            </Button>
            <Divider sx={{ width: "50%", my: 2 }}>OR</Divider>
            <Button
              variant="outlined"
              color="primary"
              //   fullWidth
              onClick={handleFacebookSignIn}
              startIcon={<Facebook />}
            >
              Sign in with Facebook
            </Button>
          </Box>
          <Box sx={{ marginTop: 1 }}></Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default AccountSignin;
