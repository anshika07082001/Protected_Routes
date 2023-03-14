import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Settings = () => {
  // search params state for setting the params filled by the user
  let [searchParams, setSearchParams] = useSearchParams();
  // reference for input boxes
  const settingsRef = useRef({ settings1: "", settings2: "" });
  // function sets the searchparams runs on form submit
  const settingsHandler = (e) => {
    e.preventDefault();
    setSearchParams({
      settings1: settingsRef.current.settings1.value,
      settings2: settingsRef.current.settings2.value,
    });
    e.target.reset();
  };

  return (
    <Box sx={{ margin: "80px auto", width: "80%" }}>
      <form
        onSubmit={settingsHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "auto",
          gap: "10px",
          padding: "10px",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          background: "whiteSmoke",
        }}
      >
        <label>Settings1</label>
        <input
          style={{ padding: "10px", fontSize: "1rem" }}
          ref={(ref) => (settingsRef.current.settings1 = ref)}
        />
        <label>Settings2</label>
        <input
          style={{ padding: "10px", fontSize: "1rem" }}
          ref={(ref) => (settingsRef.current.settings2 = ref)}
        />
        <Button variant="contained" type="submit">
          Save Settings
        </Button>
      </form>
      <Box sx={{ margin: "20px auto", width: "50%" }}>
        {/* rendering of search params */}
        <Typography variant="h6">
          Settings1: {searchParams.get("settings1")}
        </Typography>
        <Typography variant="h6">
          Settings2: {searchParams.get("settings2")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Settings;
