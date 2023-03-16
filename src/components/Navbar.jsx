import { Box } from "@mui/system";
import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useContextHook from "../customHook/useContextHook";

const Navbar = () => {
  const context = useContextHook();
  let navigate = useNavigate();
  // navigates to root component on reloading of app
  useEffect(() => {
    if (!(Object.keys(context.login).length > 0)) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Box sx={{ background: "whiteSmoke", flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            {/* link for home page */}
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
            {!(Object.keys(context.login).length > 0) ? (
              // link for signup login page
              <Link to="/signup" className="navbar__links">
                SignUp / Login
              </Link>
            ) : (
              <></>
            )}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {/* link for profile page */}
            <Link to="/protected/profile" className="navbar__links">
              Profile
            </Link>
            &nbsp;&nbsp;
            {/* link for settings page */}
            <Link to="/protected/settings" className="navbar__links">
              Settings
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
