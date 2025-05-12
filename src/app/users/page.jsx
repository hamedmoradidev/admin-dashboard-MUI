'use client';

import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  { field: 'email', headerName: 'Email', width: 200 },
];

const rows = [
  { id: 1, name: 'Ali', age: 30, email: 'ali@example.com' },
  { id: 2, name: 'Sara', age: 25, email: 'sara@example.com' },
  { id: 3, name: 'Reza', age: 28, email: 'reza@example.com' },
  { id: 4, name: 'Niloofar', age: 32, email: 'niloofar@example.com' },
  { id: 5, name: 'Kian', age: 22, email: 'kian@example.com' },
  { id: 6, name: 'Ladan', age: 29, email: 'ladan@example.com' },
  { id: 7, name: 'Mohammad', age: 35, email: 'mohammad@example.com' },
  { id: 8, name: 'Zahra', age: 27, email: 'zahra@example.com' },
  { id: 9, name: 'Hamed', age: 31, email: 'hamed@example.com' },


];

const DashboardPage = () => {
  return (
    <Box sx={{ padding: 3, marginTop: '64px', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 1,
          overflow: 'hidden',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          autoHeight
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default DashboardPage;
