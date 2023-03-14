import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import useContextHook from "../customHook/useContextHook";

const Profile = () => {
  const context = useContextHook();
  const navigate = useNavigate();
  // logout handler logouts the user from app and navigates to the root component
  const logoutHandler = () => {
    context.setLogin({});
    navigate("/");
  };
  return (
    <Box sx={{ margin: "100px auto", width: "80%" }}>
      <Box
        sx={{
          margin: "auto",
          textAlign: "center",
          padding: "20px",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <Typography variant="h5">User Name: {context.login.name}</Typography>
        <Typography variant="h5">User Email: {context.login.email}</Typography>
        <Typography variant="h5">User Password: {context.login.pwd}</Typography>
        <Button variant="contained" onClick={logoutHandler}>
          Log Out
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
