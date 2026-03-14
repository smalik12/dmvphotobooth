'use client';

import { Box, Container, Typography } from '@mui/material';
import { shadowsFont } from '@/theme';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaFileInvoiceDollar,
  FaCalendarCheck,
  FaCamera,
  FaCloudDownloadAlt,
} from 'react-icons/fa';

const MotionBox = motion(Box);

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: <FaEnvelope size={32} />,
    title: 'Inquiry',
    description: 'Reach out via our contact form, email, or phone to discuss your event needs.',
  },
  {
    icon: <FaFileInvoiceDollar size={32} />,
    title: 'Quote',
    description: 'Receive a customized quote based on your event details and package selection.',
  },
  {
    icon: <FaCalendarCheck size={32} />,
    title: 'Booking',
    description: 'Secure your date with a deposit and finalize event details with our team.',
  },
  {
    icon: <FaCamera size={32} />,
    title: 'Event',
    description: 'We arrive early, set up, and provide professional service throughout your event.',
  },
  {
    icon: <FaCloudDownloadAlt size={32} />,
    title: 'Delivery',
    description: 'Receive all digital photos/videos within 48 hours after your event.',
  },
];

export default function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
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

  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="black"
            fontFamily={shadowsFont.style.fontFamily}
            gutterBottom
          >
            How It Works
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            From inquiry to delivery, we make the process simple and seamless
          </Typography>

          {/* Desktop Horizontal Timeline */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'relative',
            }}
          >
            {/* Connecting Line */}
            <Box
              sx={{
                position: 'absolute',
                top: '50px',
                left: '10%',
                right: '10%',
                height: '4px',
                backgroundColor: '#ebceb5',
                zIndex: 0,
              }}
            />

            <MotionBox
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {processSteps.map((step, index) => (
                <MotionBox
                  key={index}
                  variants={stepVariants}
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {/* Circle Icon */}
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      backgroundColor: '#004aad',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      mb: 2,
                      boxShadow: '0 4px 20px rgba(0, 74, 173, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 6px 30px rgba(0, 74, 173, 0.4)',
                      },
                    }}
                  >
                    {step.icon}
                  </Box>

                  {/* Step Number */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#004aad',
                      fontWeight: 'bold',
                      mb: 1,
                      fontSize: '0.875rem',
                    }}
                  >
                    STEP {index + 1}
                  </Typography>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      color: '#333',
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      maxWidth: 180,
                    }}
                  >
                    {step.description}
                  </Typography>
                </MotionBox>
              ))}
            </MotionBox>
          </Box>

          {/* Mobile Vertical Timeline */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <MotionBox
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {processSteps.map((step, index) => (
                <MotionBox key={index} variants={stepVariants}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 3,
                      mb: 4,
                      position: 'relative',
                    }}
                  >
                    {/* Connecting Line (for mobile) */}
                    {index < processSteps.length - 1 && (
                      <Box
                        sx={{
                          position: 'absolute',
                          left: '40px',
                          top: '100px',
                          bottom: '-32px',
                          width: '4px',
                          backgroundColor: '#ebceb5',
                          zIndex: 0,
                        }}
                      />
                    )}

                    {/* Circle Icon */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        minWidth: 80,
                        borderRadius: '50%',
                        backgroundColor: '#004aad',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 20px rgba(0, 74, 173, 0.3)',
                        zIndex: 1,
                      }}
                    >
                      {step.icon}
                    </Box>

                    {/* Content */}
                    <Box sx={{ flex: 1, pt: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#004aad',
                          fontWeight: 'bold',
                          mb: 0.5,
                          display: 'block',
                        }}
                      >
                        STEP {index + 1}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          mb: 1,
                          color: '#333',
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                </MotionBox>
              ))}
            </MotionBox>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
