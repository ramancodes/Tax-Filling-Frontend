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

const GetUsername = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    role: "user",
  });

  const [username, setUsername] = React.useState(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGetUserName = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      event.preventDefault();
      const data = await axios.get(`${AppConfig.BACKEND_URL}/get-username`, { params: formData });
      if(data.status === 200){
        console.log("Username fetched Successfully", data.data);  
        setUsername(data.data.user);
        toast.success(data.data.message);
      }
    } catch (error: any) {
      setUsername(null);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="h-100">
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
            <b>Retrieve Your Username</b>
          </Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        {
          username 
          ? <Typography sx={{fontSize:"large"}}>Retrieved Username: <span className="text-blue-950">{username}</span></Typography>
          : null
        }
        <Button sx={{ mt: 1, bgcolor: '#303c8c'  }} onClick={(event: any)=>handleGetUserName(event)}>
          Get Username
        </Button>
        <Typography
          endDecorator={<Link href="/login">Click Here</Link>}
          sx={{ fontSize: "sm", alignSelf: "center" }}
        >
          Back To Login ?
        </Typography>
        <Typography
          endDecorator={<Link href="/login/forgotPassword">Forgot Password</Link>}
          sx={{ fontSize: "sm", alignSelf: "center" }}
        >
          Need Help To Login?
        </Typography>
      </Sheet>
    </div>
  );
};

export default GetUsername;
