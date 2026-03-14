'use client';

import { Box, Container, Typography, Grid2 } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import {
  FaCalendarAlt,
  FaUsers,
  FaCamera,
  FaTrophy,
} from 'react-icons/fa';

const MotionBox = motion(Box);

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: <FaCalendarAlt size={40} />,
    value: 500,
    suffix: '+',
    label: 'Events Hosted',
  },
  {
    icon: <FaUsers size={40} />,
    value: 1200,
    suffix: '+',
    label: 'Happy Customers',
  },
  {
    icon: <FaCamera size={40} />,
    value: 50000,
    suffix: '+',
    label: 'Photos Captured',
  },
  {
    icon: <FaTrophy size={40} />,
    value: 5,
    suffix: '+',
    label: 'Years in Business',
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.05) 0%, rgba(235, 206, 181, 0.05) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 74, 173, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 206, 181, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Grid2 container spacing={4}>
            {stats.map((stat, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <MotionBox
                  variants={statVariants}
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: '#fff',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 8px 30px rgba(0, 74, 173, 0.15)',
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #004aad 0%, #0056c9 100%)',
                      color: '#fff',
                      mb: 2,
                      boxShadow: '0 4px 15px rgba(0, 74, 173, 0.3)',
                    }}
                  >
                    {stat.icon}
                  </Box>

                  {/* Counter */}
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #004aad 0%, #ebceb5 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1,
                    }}
                  >
                    {startCount ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix || ''}
                      />
                    ) : (
                      '0'
                    )}
                  </Typography>

                  {/* Label */}
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#555',
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid2>
            ))}
          </Grid2>
        </MotionBox>
      </Container>
    </Box>
  );
}
