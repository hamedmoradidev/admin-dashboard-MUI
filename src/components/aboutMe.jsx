'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';

export default function AboutMe() {
  return (
    <Box
      id="aboutMe"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: { xs: 400, sm: 500, lg: 500 },
        padding: 4,
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        borderRadius: 2,
        boxShadow: 3,
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
        zIndex: 1300,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          width: '100%',
          textAlign: 'center',
          marginBottom: 4,
          fontWeight: 'bold',
          fontSize: { xs: '0.875rem', lg: '1.125rem' },
          color: 'secondary.contrastText',
        }}
      >
        Developed by Hamed Moradi
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          marginBottom: 4,
        }}
      >
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/haamedmoradiidev/"
          target="_blank"
          sx={{
            color: 'secondary.contrastText',
            '&:hover': { color: 'secondary.main' },
          }}
        >
          <LinkedIn sx={{ fontSize: { xs: 24, lg: 32 } }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/hamedmoradidev"
          target="_blank"
          sx={{
            color: 'secondary.contrastText',
            '&:hover': { color: 'secondary.main' },
          }}
        >
          <GitHub sx={{ fontSize: { xs: 24, lg: 32 } }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com/hamed.moradi.dev"
          target="_blank"
          sx={{
            color: 'secondary.contrastText',
            '&:hover': { color: 'secondary.main' },
          }}
        >
          <Instagram sx={{ fontSize: { xs: 24, lg: 32 } }} />
        </IconButton>
      </Box>

      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'secondary.contrastText' }}>
          <strong>Username:</strong>
          <span style={{ fontStyle: 'italic' }}> admin</span>
          <br />
          <strong>Password:</strong>
          <span style={{ fontStyle: 'italic' }}> admin</span>
        </Typography>
      </Box>
    </Box>
  );
}
