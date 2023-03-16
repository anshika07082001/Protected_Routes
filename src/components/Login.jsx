import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useContextHook from "../customHook/useContextHook";

const Login = () => {
  const context = useContextHook();
  let navigate = useNavigate();

  // state for dynamic rendering of login input boxes
  const [loginInps, setLoginInps] = useState([
    { label: "Enter Your Email", type: "email", value: "" },
    { label: "Enter Password", type: "password", value: "" },
  ]);
  // login input change handler for setting the value of input boxes
  const loginInpHandler = (obj, e) => {
    loginInps.map((item) => {
      if (item.label === obj.label) {
        item.value = e.target.value;
      }
    });
    setLoginInps([...loginInps]);
  };
  // login button handler after successful login naviagates to profile page
  const loginHandler = (e) => {
    e.preventDefault();
    let cond = (ele) =>
      ele.email === loginInps[0].value && ele.pwd === loginInps[1].value;
    let user = context.sign.find(cond);
    if (user === undefined) {
      alert("Password Not Matched");
    } else {
      context.setLogin(user);
      // after successful login navigates to profile page
      navigate("/protected/profile");
    }
  };
  return (
    <Box
      sx={{
        paddingTop: "80px",
        margin: "auto",
        textAlign: "center",
        width: "60%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "auto",
          border: "1px solid grey",
          padding: "20px",
          borderRadius: "10px",
          gap: "20px",
        }}
      >
        <form className="login__form" onSubmit={loginHandler}>
          {/* dynamic rendering of input boxes */}
          {loginInps.map((item, i) => {
            return (
              <TextField
                key={i}
                variant="outlined"
                type={item.type}
                value={item.value}
                label={item.label}
                onChange={(e) => loginInpHandler(item, e)}
              />
            );
          })}
          <Typography>
            Don't have an Account&nbsp;
            {/* link for signUp page */}
            <Link to="/signup">Sign Up</Link>
          </Typography>
          <Button variant="contained" type="submit">
            Log In
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
