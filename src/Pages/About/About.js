import React from "react";
import { Box, Typography, Avatar, Divider,Button} from "@mui/material";
import HeroContainer from "../../Components/CustomComponent/HeroContainer";
import MyButton from "../../Components/CustomComponent/MyButton";

export default function About() {
  return (
    <Box mt={10} px={3}>
      <Typography variant="h2" align="center" gutterBottom >
        About Me!
      </Typography>

      <HeroContainer>
        {/* Intro Section */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={4}
          mb={4}
        >
          <Avatar
            src="Sahil'sPhoto.png"  // Replace with your actual image
            alt="Sahil Rajpal"
            sx={{
              width: 180,
              height: 180,
              border: "4px solid white", // ✅ Border thickness and color
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)", // optional glow
            }}
          />

          <Box maxWidth="600px">
            <Typography variant="body1" paragraph>
              Hi! I'm <strong>Sahil Rajpal</strong>,a passionate and results-driven Software Developer and Master's 
              student in Computer Science at the University of Ottawa. I specialize in building robust, 
              scalable applications using Java, JavaScript, and Python, with hands-on experience in both academic research and real-world software projects.
            </Typography>
            <Typography variant="body1" paragraph>
              I've developed scalable web applications, chatbots, and secure
              platforms using React, AWS, Node.js, MongoDB, and more. My recent
              co-op at uOttawa, I contributed to the Symboleo project, where I unified complex codebases,
              implemented LLM-driven features, and optimized workflows using tools like GitPod and Eclipse.
            </Typography>
            <Typography variant="body1" paragraph>
              I thrive in both independent and collaborative environments and
              love building tools that solve real-world problems.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Skills Summary */}
        <Typography variant="h5" gutterBottom>
          My Core Competencies:
        </Typography>
        <Box component="ul" pl={2} sx={{ listStyle: "none" }}>
          <li>
            <Typography>
              🌐 Full-Stack Web Development: React, Node.js, MongoDB, JavaScript
            </Typography>
          </li>
          <li>
            <Typography>☁️ Cloud & DevOps: AWS, Docker</Typography>
          </li>
          <li>
            <Typography>
              🧠 AI & Machine Learning: ChatGPT, Machine Learning
            </Typography>
          </li>
          <li>
            <Typography>
              📊 Data & Automation: Python, FastAPI
            </Typography>
          </li>
          <li>
            <Typography>
              📚 Mentorship & Teaching: Android & Programming Paradigms TA at
              uOttawa
            </Typography>
          </li>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Education */}
        <Typography variant="h5" gutterBottom>
          Education:
        </Typography>
        <Typography variant="body1">
          🎓 <strong>Master of Computer Science</strong> — University of Ottawa
          (2023-2025) - A+
        </Typography>
        <Typography variant="body1" mb={2}>
          🎓 <strong>B.Tech in Computer Science</strong> — VIIT, Pune
          (CGPA: 9.47)
        </Typography>

        <Divider sx={{ my: 4 }} />
        {/* Resume Button */}
      <Button
      component="a"       // Render as <a> to support download attribute
      href="Sahil_Rajpal_Resume.pdf"
      download            // This tells browser to download the file
      size="small"
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
    View Resume
    </Button>
      </HeroContainer>
    </Box>
  );
}
