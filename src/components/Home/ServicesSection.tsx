'use client';

import { Box, Container, Grid2, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import theme from '@/theme';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ServicesSection() {
  return (
    <div className="ServicesSection-root">
      <Container sx={{ py: 8 }} style={{ backgroundColor: '#f9f9f9' }}>
        <Grid2
          container
          spacing={4}
          sx={{ mt: 2 }}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {[
            { title: 'Weddings', image: '/wedding-card-just-photo.JPG' },
            { title: 'Corporate Events', image: '/corporate-card.jpeg' },
            { title: 'Parties', image: '/birthday-card.jpg' },
          ].map((service, index) => (
            <Grid2 size={{ xs: 12, md: 4 }} key={index}>
              <MotionPaper
                elevation={4}
                variants={cardVariants}
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02) rotateX(2deg)',
                    boxShadow: `0 20px 40px rgba(0, 74, 173, 0.3)`,
                  },
                  '&:hover .gradient-overlay': {
                    opacity: 1,
                  },
                  '&:hover .service-title': {
                    color: '#004aad',
                  },
                }}
              >
                {/* Gradient overlay */}
                <Box
                  className="gradient-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.15) 0%, rgba(235, 206, 181, 0.15) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />

                {
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    style={{ width: '100%', height: 200, objectFit: 'cover' }}
                  />
                }
                <Box p={2} textAlign="center" sx={{ position: 'relative', zIndex: 2 }}>
                  <Typography
                    className="service-title"
                    variant="h6"
                    fontWeight="bold"
                    fontFamily={theme.typography.fontFamily}
                    sx={{
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
              </MotionPaper>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
}
