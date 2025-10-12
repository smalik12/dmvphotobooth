'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import NextLink from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Packages', href: '/packages' },
    { label: 'PhotoBooth Info', href: '/photobooth' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        color: 'text.primary',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        pb: 2,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Image src="/main_logo.png" alt="Logo" width={80} height={80} />
        </Box>
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              color="inherit"
              component={NextLink}
              href={link.href}
              sx={{ fontSize: '1.1rem' }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box
            sx={{ width: 220 }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
          >
            <List>
              {navLinks.map((link) => (
                <ListItemButton
                  component={NextLink}
                  href={link.href}
                  key={link.href}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
