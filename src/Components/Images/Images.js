import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types'; // For prop validation

export default function Images({ src, alt }) {
  return (
    <Box
      sx={{
        width: 60,
        height: 60,
        overflow: "hidden",
        display: 'flex', // Ensure the Box acts as a flex container
        alignItems: 'center', // Center the image vertically
        justifyContent: 'center', // Center the image horizontally
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the image covers the Box without distortion
        }}
      />
    </Box>
  );
}

// Prop validation
Images.propTypes = {
  src: PropTypes.string.isRequired, // src is required and must be a string
  alt: PropTypes.string.isRequired, // alt is required and must be a string
};

// Default props (optional, in case you want to provide fallbacks)
Images.defaultProps = {
  src: "https://via.placeholder.com/60", // Default image if src is not provided
  alt: "Image", // Default alt text if alt is not provided
};