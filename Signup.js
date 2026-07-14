import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("signupData", JSON.stringify(formData));

    alert("Signup Successful!");

    setFormData({
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #472333, #472333)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={12}
          sx={{
            p: 5,
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Sign Up
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Fill in the details to register
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
            />

            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: "18px",
                borderRadius: "30px",
                background: "linear-gradient(to right, #472333, #472333)",
                "&:hover": {
                  background:
                    "linear-gradient(to right, #472333,#472333)",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Signup;
