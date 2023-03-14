import { Button, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import useContextHook from "../customHook/useContextHook";

const Home = () => {
  let context = useContextHook();
  return (
    <Box
      sx={{
        margin: "auto",
        display: "grid",
        padding: "30px",
        paddingTop: "80px",
      }}
    >
      {/* checks whether the data is defined or not */}
      {context.data !== undefined && context.data.length > 0 ? (
        context.data.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{
                display: "inline-block",
                margin: "10px",
                padding: "20px",
                background: "whiteSmoke",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography sx={{ fontWeight: "800", fontSize: "30px" }}>
                  {item.author}
                </Typography>
                <Typography>{item.quote}</Typography>
                <Button size="medium">Learn More</Button>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon sx={{ color: "#c81f1f" }} />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon sx={{ color: "#2c18a6" }} />
                </IconButton>
              </Box>
            </Card>
          );
        })
      ) : (
        // renders loader if data is not defined
        <Box sx={{ width: "50%", textAlign: "center", margin: "auto" }}>
          <p>Please Refresh page after 10 seconds</p>
          <img
            style={{ width: "50%" }}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif"
            alt=""
          />
        </Box>
      )}
    </Box>
  );
};

export default Home;
