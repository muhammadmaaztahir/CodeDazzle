// src/components/AboutHeader.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function AboutHeader({
  title = "Service",
  tagline = "Your amazing service tagline goes here",
  backgroundImage = "./image@2x.png", // Default background image
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        backgroundImage: `url('./image@2x.png')`, // Use prop for background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center', // Center the text
          color: 'white',
          padding: 2, // Add some padding for better spacing
        }}
      >
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          {title} {/* Display title prop */}
        </Typography>
        <Typography variant="h6" color="white">
          {tagline} {/* Optional tagline */}
        </Typography>
      </Box>
    </Box>
  );
}
