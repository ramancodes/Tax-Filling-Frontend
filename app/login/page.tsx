"use client";
import React from "react";
const {
  Sheet,
  CssBaseline,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} = require("@mui/joy");
import {AppConfig} from '../../config/config';
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    role: "user",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    // const data = AppConfig.BACKEND_URL;
    const data = await axios.post(`${AppConfig.BACKEND_URL}/login`, formData);
    if(data.status === 200){
      console.log("Login Successful", data.data);  
      }
    else{
      console.log("Login Failed");
    }
  };

  return (
    <div>
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Login to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            // html input attribute
            name="username"
            type="text"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button sx={{ mt: 1 }} onClick={handleSubmit}>
          Log in
        </Button>
        <Typography
          endDecorator={<Link href="/register">Sign up</Link>}
          sx={{ fontSize: "sm", alignSelf: "center" }}
        >
          Don&apos;t have an account?
        </Typography>
        <Typography
          endDecorator={<Link href="/login/forgotPassword">Forgot Password</Link>}
          sx={{ fontSize: "sm", alignSelf: "center" }}
        >
          Need Help To Login?
        </Typography>
        <Typography
          endDecorator={<Link href="/login/getUsername">Click Here</Link>}
          sx={{ fontSize: "sm", alignSelf: "center" }}
        >
          Forgot Username?
        </Typography>
      </Sheet>
    </div>
  );
};

export default Login;
