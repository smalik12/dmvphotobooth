'use client';

import {
  Box,
  Container,
  Grid2,
  Typography,
  TextField,
  Button,
  IconButton,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import {
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { contactInfo } from '@/config/contact';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Packages', href: '/packages' },
    { label: 'PhotoBooth Info', href: '/photobooth' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #004aad 0%, #0056c9 100%)',
        color: '#fff',
        pt: 8,
        pb: 3,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {/* About Section */}
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Box sx={{ mb: 2 }}>
              <Image
                src="/main_logo.svg"
                alt="DMV Photo Booth Logo"
                width={150}
                height={60}
                style={{
                  width: '150px',
                  height: 'auto',
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              Creating unforgettable memories for your special events with
              professional photo booth services in the DMV area.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  '&:hover': {
                    color: '#ebceb5',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <FaInstagram size={24} />
              </IconButton>
              <IconButton
                component="a"
                href={contactInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  '&:hover': {
                    color: '#ebceb5',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <FaTiktok size={24} />
              </IconButton>
            </Box>
          </Grid2>

          {/* Quick Links */}
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <MuiLink
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#ebceb5',
                      textDecoration: 'underline',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid2>

          {/* Contact Info */}
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaEnvelope />
                <MuiLink
                  href={`mailto:${contactInfo.email}`}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': { color: '#ebceb5' },
                  }}
                >
                  {contactInfo.email}
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaPhone />
                <MuiLink
                  href={`tel:${contactInfo.phone}`}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': { color: '#ebceb5' },
                  }}
                >
                  {contactInfo.phone}
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <FaMapMarkerAlt style={{ marginTop: '4px' }} />
                <Typography variant="body2">
                  DMV Area (DC, Maryland, Virginia)
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 6,
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ textAlign: { xs: 'center', sm: 'left' } }}
          >
            © {currentYear} DMV Photo Booth. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
