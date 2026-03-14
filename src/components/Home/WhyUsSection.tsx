'use client';

import theme, { shadowsFont } from '@/theme';
import { Box, Container, Grid2, Paper, Typography } from '@mui/material';
import { FaCameraRetro, FaHandshake, FaRegCalendarAlt } from 'react-icons/fa';
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

export default function WhyUsSection() {
  return (
    <div className="WhyUsSection-root">
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="black"
            fontFamily={shadowsFont.style.fontFamily}
            gutterBottom
          >
            Why Choose Us
          </Typography>
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
              {
                icon: <FaCameraRetro size={40} color="#CD7F32" />,
                title: 'High-Quality Photos',
                description:
                  'We use professional-grade cameras and lighting to ensure every photo looks stunning.',
              },
              {
                icon: <FaRegCalendarAlt size={40} color="#C0C0C0" />,
                title: 'Seamless Experience',
                description:
                  'From setup to teardown, our team handles everything so you can focus on enjoying your event.',
              },
              {
                icon: <FaHandshake size={40} color="tan" />,
                title: 'Trusted Service',
                description:
                  'Hundreds of satisfied clients have trusted us to capture their special moments beautifully.',
              },
            ].map((item, index) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={index}>
                <MotionPaper
                  elevation={3}
                  variants={cardVariants}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </MotionPaper>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
}
