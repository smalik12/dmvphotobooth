'use client';

import { Box, Button, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import theme from '@/theme';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const images = [
    '/heroSection/hero-photobooth.jpg',
    '/heroSection/hero-photobooth2.jpg',
    '/heroSection/hero-photobooth3.jpg',
    '/heroSection/hero-photobooth4.jpg',
    '/heroSection/hero-photobooth5.jpg',
    '/heroSection/hero-photobooth6.jpg',
    '/heroSection/hero-photobooth7.jpg',
    '/heroSection/hero-photobooth8.jpg',
    '/heroSection/hero-photobooth9.jpg',
    '/heroSection/hero-photobooth10.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef(null);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 5000); // 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <Box
      ref={heroRef}
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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
          <Box
            key={src}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              // Ken Burns effect - subtle zoom on active image
              transform:
                index === currentImageIndex ? 'scale(1.05)' : 'scale(1)',
              animation:
                index === currentImageIndex
                  ? 'kenBurns 20s ease-in-out infinite alternate'
                  : 'none',
              '@keyframes kenBurns': {
                '0%': {
                  transform: 'scale(1)',
                },
                '100%': {
                  transform: 'scale(1.08)',
                },
              },
            }}
          >
            <Image
              src={src}
              alt={`Hero photobooth ${index + 1}`}
              fill
              priority={index === currentImageIndex}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Box>
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

        {/* Carousel Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1.5,
            zIndex: 10,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor:
                  index === currentImageIndex
                    ? '#004aad'
                    : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform:
                  index === currentImageIndex ? 'scale(1.2)' : 'scale(1)',
                '&:hover': {
                  backgroundColor:
                    index === currentImageIndex ? '#004aad' : '#ebceb5',
                  transform: 'scale(1.3)',
                },
              }}
              aria-label={`Go to slide ${index + 1}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  goToSlide(index);
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Right / Content side */}
      <Box
        component={motion.div}
        style={{ y }}
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
                  background:
                    'linear-gradient(135deg, #004aad 0%, #0056c9 100%)',
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
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
                    background:
                      'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    transition: 'left 0.5s ease',
                  },
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #0056c9 0%, #004aad 100%)',
                    transform: 'scale(1.05) translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 74, 173, 0.4)',
                  },
                  '&:hover::before': {
                    left: '100%',
                  },
                }}
              >
                Book Now
              </Button>
            </Link>
          </Box>

          {/* Mini Stats */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              mt: 3,
              pt: 3,
              borderTop: '1px solid rgba(0, 74, 173, 0.2)',
            }}
          >
            {[
              { value: '100+', label: 'Events' },
              { value: '200+', label: 'Clients' },
              { value: '2+', label: 'Years' },
            ].map((stat, index) => (
              <Box key={index} sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    background: 'linear-gradient(90deg, #004aad, #ebceb5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: '#555', fontWeight: 600 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
