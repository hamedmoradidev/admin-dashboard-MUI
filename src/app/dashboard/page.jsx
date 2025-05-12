'use client';

import React from 'react';
import { Typography, Box } from '@mui/material';
import Categories from '../../sections/categories';
import Chart from '../../sections/chart'
import Cards from '../../sections/cards'
export default function DashboardPage() {
  return (
    <Box sx={{ padding: 3, marginTop: '64px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Cards />
      <Chart />
      <Categories />
    </Box>
  );
}
