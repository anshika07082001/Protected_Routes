import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const SignUp = (props) => {
  const [signInps, setSignInps] = useState([
    { label: "Enter Your Name", type: "text", value: "" },
    { label: "Enter Your Email", type: "email", value: "" },
    { label: "Enter Password", type: "password", value: "" },
  ]);

  const signInpHandler = (obj, e) => {
    signInps.map((item) => {
      if (item.label === obj.label) {
        item.value = e.target.value;
      }
    });
    setSignInps([...signInps]);
  };

  const signBtnHandler = (e) => {
    e.preventDefault();
    let obj = {};
    let cond = (ele) => ele.value === "";
    let ind = signInps.find(cond);
    if (ind === undefined) {
      obj = {
        name: signInps[0].value,
        email: signInps[1].value,
        pwd: signInps[2].value,
      };
      props.sign.push(obj);
      props.setSign([...props.sign]);
      reset();
    } else {
      alert("fill all details");
    }
  };

  const reset = () => {
    signInps.map((item) => {
      item.value = "";
    });
    setSignInps([...signInps]);
  };

  return (
    <>
      <Navbar />
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
          <form className="sign__form" onSubmit={(e) => signBtnHandler(e)}>
            {signInps.map((item, i) => {
              return (
                <TextField
                  key={i}
                  variant="outlined"
                  label={item.label}
                  value={item.value}
                  type={item.type}
                  onChange={(e) => signInpHandler(item, e)}
                />
              );
            })}
            <Typography>
              Already Have an Account &nbsp;
              <Link to="/login">Log In</Link>
            </Typography>
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
