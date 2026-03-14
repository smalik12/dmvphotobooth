'use client';
import React, { useState, useEffect } from 'react';
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
  Divider,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { shadowsFont } from '@/theme';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Packages', href: '/packages' },
    { label: 'PhotoBooth Info', href: '/photobooth' },
    // { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        color: 'text.primary',
        transition: 'all 0.3s ease',
        boxShadow: scrolled
          ? '0 4px 30px rgba(0, 74, 173, 0.12)'
          : '0 2px 15px rgba(235, 206, 181, 0.15)',
        borderBottom: scrolled
          ? '2px solid rgba(0, 74, 173, 0.1)'
          : '2px solid rgba(235, 206, 181, 0.3)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          py: scrolled ? 1.5 : 2.5,
          px: { xs: 2, md: 4 },
          transition: 'padding 0.3s ease',
          maxWidth: '1400px',
          width: '100%',
          mx: 'auto',
        }}
      >
        {/* Logo */}
        <Box
          component={NextLink}
          href="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            textDecoration: 'none',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Image
            src="/main_logo.png"
            alt="DMV Photo Booth Logo"
            width={scrolled ? 90 : 120}
            height={scrolled ? 90 : 120}
            style={{
              transition: 'all 0.3s ease',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
            priority
          />
        </Box>
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Button
                key={link.href}
                color="inherit"
                component={NextLink}
                href={link.href}
                sx={{
                  fontSize: '1.05rem',
                  position: 'relative',
                  fontWeight: isActive ? 700 : 500,
                  px: 2.5,
                  py: 1,
                  borderRadius: '12px',
                  color: isActive ? '#004aad' : '#333',
                  backgroundColor: isActive ? 'rgba(235, 206, 181, 0.2)' : 'transparent',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 6,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: isActive ? '60%' : '0%',
                    height: '3px',
                    borderRadius: '2px',
                    background: 'linear-gradient(135deg, #004aad 0%, #ebceb5 100%)',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(235, 206, 181, 0.15)',
                    color: '#004aad',
                    transform: 'translateY(-2px)',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                {link.label}
              </Button>
            );
          })}

          {/* CTA Button */}
          <Button
            component={NextLink}
            href="/contact"
            variant="contained"
            sx={{
              ml: 2,
              background: 'linear-gradient(135deg, #004aad 0%, #0056c9 100%)',
              color: '#fff',
              px: 3,
              py: 1,
              fontWeight: 'bold',
              fontSize: '1rem',
              borderRadius: '9999px',
              textTransform: 'none',
              boxShadow: '0 4px 15px rgba(0, 74, 173, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #0056c9 0%, #004aad 100%)',
                transform: 'translateY(-2px) scale(1.05)',
                boxShadow: '0 6px 20px rgba(0, 74, 173, 0.4)',
              },
            }}
          >
            Book Now
          </Button>
        </Box>
        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
          sx={{
            display: { xs: 'block', md: 'none' },
            backgroundColor: 'rgba(235, 206, 181, 0.2)',
            '&:hover': {
              backgroundColor: 'rgba(235, 206, 181, 0.3)',
            },
          }}
        >
          <MenuIcon sx={{ fontSize: 28, color: '#004aad' }} />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: 280,
              background: 'linear-gradient(180deg, #fff 0%, #f9f9f9 100%)',
            },
          }}
        >
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Drawer Header */}
            <Box
              sx={{
                p: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, #ebceb5 0%, #d9b89f 100%)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Image
                  src="/main_logo.png"
                  alt="DMV Photo Booth"
                  width={50}
                  height={50}
                  style={{ borderRadius: '8px' }}
                />
                <Typography
                  variant="h6"
                  fontFamily={shadowsFont.style.fontFamily}
                  sx={{ color: '#333', fontWeight: 'bold' }}
                >
                  Menu
                </Typography>
              </Box>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{
                  color: '#004aad',
                  '&:hover': { backgroundColor: 'rgba(0, 74, 173, 0.1)' },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider sx={{ borderColor: 'rgba(0, 74, 173, 0.1)' }} />

            {/* Navigation Links */}
            <List sx={{ p: 2, flexGrow: 1 }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <ListItemButton
                    component={NextLink}
                    href={link.href}
                    key={link.href}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      mb: 1,
                      borderRadius: 2,
                      py: 1.5,
                      backgroundColor: isActive ? 'rgba(235, 206, 181, 0.3)' : 'transparent',
                      borderLeft: isActive ? '4px solid #004aad' : '4px solid transparent',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(235, 206, 181, 0.2)',
                        borderLeft: '4px solid #ebceb5',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 700 : 500,
                        fontSize: '1.1rem',
                        color: isActive ? '#004aad' : '#333',
                      }}
                    />
                  </ListItemButton>
                );
              })}
            </List>

            <Divider sx={{ borderColor: 'rgba(0, 74, 173, 0.1)' }} />

            {/* CTA in Drawer */}
            <Box sx={{ p: 3 }}>
              <Button
                component={NextLink}
                href="/contact"
                onClick={() => setDrawerOpen(false)}
                variant="contained"
                fullWidth
                sx={{
                  background: 'linear-gradient(135deg, #004aad 0%, #0056c9 100%)',
                  color: '#fff',
                  py: 1.5,
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  borderRadius: '12px',
                  textTransform: 'none',
                  boxShadow: '0 4px 15px rgba(0, 74, 173, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0056c9 0%, #004aad 100%)',
                    boxShadow: '0 6px 20px rgba(0, 74, 173, 0.4)',
                  },
                }}
              >
                Book Now
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
