import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button, Container } from "@mui/material";

function Front() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stacks on small screens
        alignItems: "center", // Center content vertically
        // backgroundColor: "grey.900",
        background: "transparent",
        color: "white",
        paddingX: { xs: 2, sm: 10 }, // Scalable padding on different screen sizes
        paddingY: 10,
      }}
    >
      {/* Left Side: Text Content */}
      <Container
        maxWidth="md"
        sx={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Animated Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
            }}
          >
            Hi, I'm Sahil Rajpal
          </Typography>
        </motion.div>

        {/* Animated Subtitle & Button */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Responsive font size for subtitle
            }}
          >
            Full Stack Developer | Devops | AI Enthusiast
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "black",
              color: "white",
              border: "1px solid white", // Fixed border style
              "&:hover": {
                backgroundColor: "grey.800", // Slight hover effect
              },
            }}
            href="mailto:sahilrajpal40@gmail.com"
          >
            Contact Me
          </Button>
        </motion.div>
      </Container>
      {/* Right Side: Image Placeholder */}
      <Container
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: 250, sm: 400 }, // Scales image size based on screen size
            height: { xs: 250, sm: 400 }, // Scales image size based on screen size
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%", // Makes it circular
            overflow: "hidden", // Ensures the image fits in the circle
            border: "8px solid white", // Adds a circular border around the image
          }}
        >
          <img
            src="Sahil'sPhoto.png" // Replace with your image path or URL
            alt="Sahil Rajpal"
            style={{
              width: "100%", // Ensures the image fills the circle
              height: "100%",
              objectFit: "cover", // Ensures the image covers the entire area
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Front;
