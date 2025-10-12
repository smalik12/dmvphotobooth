'use client';

import { Box, Button, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        minHeight: '80vh',
        mt: 8,
        [theme.breakpoints.up('sm')]: {
          minHeight: '90vh',
        },
      }}
    >
      {/* Left / Image side */}
      <Box
        sx={{
          flex: 3,
          position: 'relative',
          overflow: 'hidden',
          height: { xs: 'auto', md: 'auto' },
          minHeight: { xs: '250px', md: 'auto' },
          '& img': { objectFit: { xs: 'contain', md: 'cover' } },
        }}
      >
        <Image
          src="/hero-photobooth.png"
          alt="Hero photobooth"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>

      {/* Right / Content side */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          p: { xs: 3, md: 6 },
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(12px)',
            borderRadius: 3,
            p: { xs: 3, md: 5 },
            maxWidth: 420,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <Image
            src="/main_logo.svg"
            alt="Logo"
            width={250}
            height={100}
            style={{ width: '100%', height: 'auto' }}
          />

          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              mt: 2,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #004aad, #ebceb5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Weddings • Corporate Events • Birthdays • Any Occasion
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Link href="/contact" passHref legacyBehavior>
              <Button
                variant="contained"
                size="large"
                sx={{
                  color: '#fff',
                  backgroundColor: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                  },
                }}
              >
                Book Now
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
