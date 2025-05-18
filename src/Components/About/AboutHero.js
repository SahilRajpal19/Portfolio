import React from "react";
import { Box, Typography } from "@mui/material";
import HeroContainer from "../CustomComponent/HeroContainer";

export default function AboutHero() {
  return (
      <HeroContainer title="About Me">
        {/* Description */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ textAlign: "center", maxWidth: 800 }}
          >
            Hi! I'm Sahil Rajpal, a passionate software developer with a
            strong background in web development, cloud computing, and AI. I
            love building interactive and efficient applications, exploring new
            technologies, and solving real-world problems through code.
          </Typography>
        </Box>
      </HeroContainer>
  );
}
