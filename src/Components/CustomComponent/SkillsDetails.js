import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

export default function SkillsDetails({children, title}) {
  return (
    <div style={{padding:"20px"}}>
     <Typography varient="h1" mb={2}>{title}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Flex row layout
            justifyContent: 'center', // Space out images horizontally
            alignItems: "center", // Center the images vertically
            flexWrap: "wrap", // Allow wrapping on smaller screens
            gap: 3, // Add spacing between images
          }}
        >
        {children}
        </Box>
    </div>
  )
}
