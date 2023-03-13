import { Box } from "@mui/system";
import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { UserConsumer } from "../context/UserContext";

const Navbar = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(props.login).length > 0) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }, [props.login]);
  
  return (
    <Box sx={{ background: "whiteSmoke", flexGrow: 1 }}>
      <AppBar position="fixed">
        <UserConsumer>
          {(User) => {
            // console.log(User);
            return (
              <Toolbar>
                <Link to="/" className="navbar__links">
                  <HomeIcon fontSize="large" />
                </Link>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, marginLeft: "10px" }}
                >
                  QUOTES
                </Typography>
                <Link to="/signup" className="navbar__links">
                  {/* <Button color="inherit"> */}
                  SignUp / Login
                  {/* </Button> */}
                </Link>
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
              </Toolbar>
            );
          }}
        </UserConsumer>
      </AppBar>
    </Box>
  );
};

export default Navbar;
