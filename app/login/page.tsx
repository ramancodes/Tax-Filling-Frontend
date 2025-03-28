"use client";
import React from "react";
import {
  Sheet,
  CssBaseline,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from "@mui/joy";
import { useAppDispatch, useAppSelector, RootState } from "../../store";
import Cookies from "js-cookie";
import {login} from '../../store/applications/actions';

const Login = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    role: "user",
  });
  const dispatch = useAppDispatch();

  const {
      bearerToken,
      apiState: { status, isError, message },
      isLoginError,
  } = useAppSelector((state: RootState) => state.application);

  React.useEffect(() => {
    if (status == 200) {
      Cookies.set("bearerToken", bearerToken, { expires: 7 });
      window.location.href = "/";
    }
  }, [status]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      event.preventDefault();
      dispatch(
        login(formData, true)
      );
    } catch (error: any) {
      console.log(error);
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
        <Button sx={{ mt: 1, bgcolor: '#303c8c' }} onClick={(event: any)=>handleSubmit(event)}>
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
