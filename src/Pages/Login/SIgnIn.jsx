import React, { useState } from "react";
import "./signin.css";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError(!email);
    setPasswordError(password.length < 6);

    if (email && password.length >= 6) {
      console.log({ email, password });
      alert("Logged in successfully!");
    }
  };

  return (
    <div className="container">
      <Container maxWidth="xs" className="signin-container">
        <Box className="signin-box">
          <Typography variant="h4" gutterBottom className="signin-title">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} className="signin-form">
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? "Email is required" : ""}
              className="signin-input"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={
                passwordError ? "Password must be at least 6 characters" : ""
              }
              className="signin-input"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="signin-button"
            >
              Sign In
            </Button>
            <Typography
              variant="body2"
              align="center"
              className="signin-link-text"
            >
              Don't have an account?{" "}
              <Link
                component="button"
                onClick={() => navigate("/signup")}
                className="signin-link"
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
