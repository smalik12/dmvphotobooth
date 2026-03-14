'use client';

import theme, { shadowsFont } from '@/theme';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function CTASection() {
  return (
    <div className="CTASection-root">
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        sx={{
          py: 8,
          textAlign: 'center',
          backgroundColor: theme.palette.background.default,
          color: '#fff',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="black"
          fontFamily={shadowsFont.style.fontFamily}
          gutterBottom
        >
          Ready to Book Your Event?
        </Typography>
        <Link href="/contact" passHref legacyBehavior>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #004aad 0%, #0056c9 100%)',
              color: '#fff',
              borderRadius: '9999px',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
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
            Contact us!
          </Button>
        </Link>
      </MotionBox>
    </div>
  );
}
