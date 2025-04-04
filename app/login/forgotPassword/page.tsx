"use client";
import { AppConfig } from "@/config/config";
import axios from "axios";
import React from "react";
import {
  Sheet,
  Typography,
  CssBaseline,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from "@mui/joy";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    newPassword: "",
    role: "user",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForgotPassword = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      event.preventDefault();
      const data = await axios.post(`${AppConfig.BACKEND_URL}/forgot-password`, formData);
      if(data.status === 200){
        console.log("Password Reset Successful", data.data);  
        toast.success(data.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
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
            <b>Reset Your Password</b>
          </Typography>
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
          <FormLabel>New Password</FormLabel>
          <Input
            // html input attribute
            name="newPassword"
            type="password"
            placeholder="Enter New Password"
            value={formData.newPassword}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button sx={{ mt: 1, bgcolor: '#303c8c'  }} onClick={(event: any)=>handleForgotPassword(event)}>
          Reset Password
        </Button>
        <Typography
          endDecorator={<Link href="/login">Click Here</Link>}
          sx={{ fontSize: "sm", alignSelf: "center" }}
        >
          Back To Login ?
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

export default ForgotPassword;
