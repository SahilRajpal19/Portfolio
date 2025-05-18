import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import {Box } from "@mui/material";

const HeroContainer = ({ children ,title}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Centers the content horizontally
      }}
      py={5}
      px={2}
    >
    <Container
      sx={{
        backdropFilter: "blur(12px)", // Stronger blur effect
        WebkitBackdropFilter: "blur(12px)", // Safari support
        border: "2px solid rgba(255, 255, 255, 0.4)", // Softer white border
        borderRadius: "20px", // Smooth rounded edges
        padding: "50px", // Spacious padding
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
        transition: "all 0.3s ease-in-out", // Smooth hover effect
        "&:hover": {
          transform: "scale(1.02)", // Slight hover scale effect
          boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
        },
      }}
    >
    <Typography variant="h3" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
      {children}
    </Container>
    </Box>
  );
};

export default HeroContainer;
