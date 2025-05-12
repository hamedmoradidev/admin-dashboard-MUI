'use client';

import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      login();
      router.push('/dashboard');
    } else {
      alert('wrong username or password!');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        padding: 2,
        overflow: 'hidden',
        position: 'relative', 
      }}
    >
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        sx={{ marginBottom: '16px', maxWidth: 400 }}
      />
      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        fullWidth
        sx={{ marginBottom: '16px', maxWidth: 400 }}
      />
      <Button variant="contained" color="secondary" onClick={handleLogin} fullWidth sx={{ maxWidth: 400 }}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
