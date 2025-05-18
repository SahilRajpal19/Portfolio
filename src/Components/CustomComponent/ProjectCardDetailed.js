import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MyButton from './MyButton';
import { light } from '@mui/material/styles/createPalette';

export default function ProjectsList({ projects }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
        alignContent: 'center',
      }}
      mt={5}
    >
      {projects.map((project, idx) => (
        <Card
          key={idx}
          sx={{
            display: 'flex',
            maxWidth: 800,
            width: '100%',          // Make card fill parent container width
            minHeight: 200,         // Minimum height so card doesn't shrink too much vertically
            flexDirection: { xs: 'column', sm: 'row' }, // 👈 Responsive layout
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 400, flexShrink: 0 }}  // Prevent image from shrinking
            image={project.image}
            alt={project.title}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,           // Allow text box to grow and fill remaining space
              overflow: 'visible',   // Make sure content can overflow vertically if needed
              minWidth: 0,           // Important to allow text wrapping inside flexbox
              justifyContent: 'space-between', // 📌 Push button to bottom
            }}
          >
            <CardContent sx={{ paddingBottom: '16px !important' }}>
              <Typography component="div" variant="h5" gutterBottom>
                {project.title}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                color="text.secondary"
                sx={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
              >
                {project.content}
              </Typography>
            </CardContent>
            <Box mx={2} my={2}>
              <MyButton name="Explore" link={project.link}/>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}