import React from 'react';
import { Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2025-05-01', totalSales: 120, totalRevenue: 1500, orders: 80, visitors: 2000 },
  { name: '2025-05-02', totalSales: 145, totalRevenue: 1800, orders: 95, visitors: 2500 },
  { name: '2025-05-03', totalSales: 98, totalRevenue: 1250, orders: 65, visitors: 1700 },
  { name: '2025-05-04', totalSales: 210, totalRevenue: 2500, orders: 130, visitors: 3000 },
  { name: '2025-05-05', totalSales: 170, totalRevenue: 2200, orders: 110, visitors: 2700 },
  { name: '2025-05-06', totalSales: 130, totalRevenue: 1600, orders: 85, visitors: 2300 },
  { name: '2025-05-07', totalSales: 160, totalRevenue: 2100, orders: 100, visitors: 2800 },
];

const MyChart = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        E-Commerce Sales Overview (May 2025)
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalSales" stroke="#8884d8" name="Total Sales" />
          <Line type="monotone" dataKey="totalRevenue" stroke="#82ca9d" name="Total Revenue" />
          <Line type="monotone" dataKey="orders" stroke="#ff7300" name="Orders" />
          <Line type="monotone" dataKey="visitors" stroke="#ff0000" name="Visitors" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyChart;
