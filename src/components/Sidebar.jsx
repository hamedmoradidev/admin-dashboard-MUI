'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText,
  IconButton, Divider, useMediaQuery, AppBar, Toolbar, Typography, Box
} from '@mui/material';

import {
  Home as HomeIcon,
  Person as PersonIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  ShoppingCart as ShoppingCartIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useThemeMode } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import LogoutButton from '@/components/LogoutButton';

const drawerWidth = 240;

const Sidebar = () => {
  const { mode, toggleTheme } = useThemeMode();
  const { isLoggedIn } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <List>
        <ListItem button="true" component={Link} href="/dashboard">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: mode === 'dark' ? '#fff' : '#000' }} />
        </ListItem>

        <ListItem button="true" component={Link} href="/products">
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Products" sx={{ color: mode === 'dark' ? '#fff' : '#000' }} />
        </ListItem>

        <ListItem button="true" component={Link} href="/users">
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Users" sx={{ color: mode === 'dark' ? '#fff' : '#000' }} />
        </ListItem>
      </List>

      <Divider />

      <List>
        {isLoggedIn && isMobile && (
          <ListItem>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <LogoutButton />
          </ListItem>
        )}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider />
          <ListItem>
                  <Typography
                    variant="h5"
                    sx={{ color: mode === 'dark' ? '#fff' : '#000', textAlign: 'center'}}
                  >
                    Developed by Hamed Moradi
                  </Typography>
          </ListItem>

      <Divider />

      <List>
        <ListItem>
          <ListItemIcon>
            <IconButton onClick={toggleTheme}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </ListItemIcon>
          <ListItemText
            primary={`Theme: ${mode}`}
            sx={{ color: mode === 'dark' ? '#fff' : '#000' }} 
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          bgcolor: mode === 'dark' ? 'primary.main' : 'primary.main',
          color: '#fff',
          ml: isMobile ? 0 : `${drawerWidth}px`,
          width: isMobile ? '100%' : `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            {isMobile && (
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" noWrap component="div">
              Admin Panel
            </Typography>
          </Box>

          {isLoggedIn && !isMobile && (
            <Box>
              <LogoutButton />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: mode === 'dark' ? '#1e1e1e' : '#f4f4f4',
            color: mode === 'dark' ? '#fff' : '#000',
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Toolbar />
    </>
  );
};

export default Sidebar;
