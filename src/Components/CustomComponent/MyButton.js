import React from 'react'
import { Button } from '@mui/material'

export default function MyButton({name,link}) {
  return (
    <Button
          href={link}
          size="small"
          sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold", // Makes text bold
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)", // Scale up slightly
              backgroundColor: "#f0f0f0", // Light hover background
            },
          }}
        >
          {name}
    </Button>
  )
}
