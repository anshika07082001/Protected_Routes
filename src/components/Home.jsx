import { Button, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import Navbar from "./Navbar";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: "auto",
          display: "grid",
          padding: "30px",
          paddingTop: "80px",
        }}
      >
        {props.data.map((item) => {
          return (
            <Card key={item.id}
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
        })}
      </Box>
    </>
  );
};

export default Home;
