'use client';
import React, { useState } from 'react';
import { Typography, Tabs, Tab, Box, Container, Button } from '@mui/material';
import { FaCameraRetro, FaVideo, FaStar, FaGift } from 'react-icons/fa';
import PhotoBoothPackages from '@/components/PhotoBoothPackages';
import Photo360Packages from '@/components/Photo360Packages';
import { shadowsFont } from '@/theme';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const MotionBox = motion(Box);

export default function PackagesPage() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ebceb5 0%, #d9b89f 100%)',
          color: '#333',
          pt: { xs: 16, md: 20 },
          pb: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Decorations */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 74, 173, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              fontFamily={shadowsFont.style.fontFamily}
              sx={{
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              }}
            >
              Our Packages
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              Choose the perfect package for your special event. Professional service, unlimited memories.
            </Typography>

            {/* Quick Stats */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 3, md: 6 },
                flexWrap: 'wrap',
                mt: 4,
              }}
            >
              {[
                { icon: <FaStar />, label: '5-Star Service' },
                { icon: <FaGift />, label: 'Custom Props Included' },
                { icon: <FaCameraRetro />, label: 'Professional Equipment' },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '1rem',
                    color: '#555',
                  }}
                >
                  <Box sx={{ fontSize: '1.5rem', color: '#004aad' }}>{item.icon}</Box>
                  <Typography variant="body1" fontWeight={600}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* Tabs Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            variant="fullWidth"
            sx={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              mx: 'auto',
              maxWidth: 700,
              boxShadow: '0 4px 20px rgba(0, 74, 173, 0.15)',
              p: 1,
              '& .MuiTabs-indicator': {
                height: '100%',
                borderRadius: '12px',
                backgroundColor: '#004aad',
                zIndex: 0,
              },
            }}
          >
            <Tab
              icon={<FaCameraRetro size={24} />}
              iconPosition="start"
              label="Photo Booth"
              sx={{
                fontWeight: 'bold',
                fontSize: '1.1rem',
                color: tabValue === 0 ? '#fff' : '#555',
                zIndex: 1,
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                py: 2,
                '&.Mui-selected': {
                  color: '#fff',
                },
                '&:hover': {
                  backgroundColor: tabValue === 0 ? 'transparent' : 'rgba(0, 74, 173, 0.05)',
                },
              }}
            />
            <Tab
              icon={<FaVideo size={24} />}
              iconPosition="start"
              label="360 Booth"
              sx={{
                fontWeight: 'bold',
                fontSize: '1.1rem',
                color: tabValue === 1 ? '#fff' : '#555',
                zIndex: 1,
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                py: 2,
                '&.Mui-selected': {
                  color: '#fff',
                },
                '&:hover': {
                  backgroundColor: tabValue === 1 ? 'transparent' : 'rgba(0, 74, 173, 0.05)',
                },
              }}
            />
          </Tabs>
        </MotionBox>

        {/* Content with Animation */}
        <Box sx={{ mt: 6 }}>
          <AnimatePresence mode="wait">
            {tabValue === 0 && (
              <MotionBox
                key="photobooth"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <PhotoBoothPackages />
              </MotionBox>
            )}

            {tabValue === 1 && (
              <MotionBox
                key="360booth"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Photo360Packages />
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>

        {/* Bottom CTA Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            mt: 8,
            p: 6,
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.05) 0%, rgba(235, 206, 181, 0.05) 100%)',
            border: '2px solid #ebceb5',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            fontFamily={shadowsFont.style.fontFamily}
            sx={{ mb: 2, color: '#333' }}
          >
            Ready to Book Your Event?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#555', maxWidth: 600, mx: 'auto' }}>
            Contact us today for a free quote and let&apos;s make your special day unforgettable!
          </Typography>
          <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: 'linear-gradient(135deg, #004aad 0%, #0056c9 100%)',
                color: '#fff',
                px: 6,
                py: 2,
                fontWeight: 'bold',
                fontSize: '1.1rem',
                borderRadius: '9999px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 74, 173, 0.3)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transition: 'left 0.5s ease',
                },
                '&:hover': {
                  background: 'linear-gradient(135deg, #0056c9 0%, #004aad 100%)',
                  transform: 'scale(1.05) translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 74, 173, 0.4)',
                },
                '&:hover::before': {
                  left: '100%',
                },
              }}
            >
              Get a Free Quote
            </Button>
          </Link>
        </MotionBox>
      </Container>
    </Box>
  );
}
