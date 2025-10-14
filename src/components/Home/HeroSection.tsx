import { Box, Button, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import theme from '@/theme';
import { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

export default function HeroSection() {
  const images = [
    '/heroSection/hero-photobooth.png',
    '/heroSection/hero-photobooth2.png',
    '/heroSection/hero-photobooth3.png',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        minHeight: '80vh',
        mt: 12,
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
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Hero photobooth ${index + 1}`}
            fill
            priority={index === currentImageIndex}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 8,
            transform: 'translateY(-50%)',
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0.4)',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
            zIndex: 10,
          }}
          aria-label="Previous image"
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 8,
            transform: 'translateY(-50%)',
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0.4)',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
            zIndex: 10,
          }}
          aria-label="Next image"
        >
          <ArrowForwardIos />
        </IconButton>
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
            Our goal is to make your special day into a memory that will last a
            lifetime
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
