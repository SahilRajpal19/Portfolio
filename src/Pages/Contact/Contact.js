import React from 'react'
import ContactHero from '../../Components/Contact/ContactHero'
import { Box, Typography, TextField, Button } from '@mui/material'
import HeroContainer from '../../Components/CustomComponent/HeroContainer'
import { useState } from 'react'

export default function Contact() {
      const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSendEmail = () => {
      const subject = encodeURIComponent(`Message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  
      window.location.href = `mailto:sahilrajpal40@gmail.com?subject=${subject}&body=${body}`;
    };
  return (
    <Box mt={10}>
    <Typography variant='h2'>
        Contact Me!
    </Typography>
     <HeroContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 1000,
          margin: '0 auto',
          padding: 2,
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src="https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg"
          alt="Contact Illustration"
          sx={{
            width: { xs: '100%', md: '50%' },
            borderRadius: 2,
            boxShadow: 3,
            objectFit: 'cover',
            maxHeight: 400,
          }}
        />

        {/* Form Section */}
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Typography variant="body1" color="textSecondary" textAlign="center" mb={2}>
            I'd love to hear from you! Whether it's a project, idea, or just to say hello.
          </Typography>

           <TextField
        label="Name"
        variant="outlined"
        fullWidth
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        onClick={handleSendEmail}
        sx={{
          backgroundColor: "white",
          color: "black",
          fontWeight: "bold",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        Send Message
      </Button>
        </Box>
      </Box>
    </HeroContainer>
    </Box>
  )
}