'use client';
import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import theme from '@/theme';
import WhyUsSection from '@/components/Home/WhyUsSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CTASection from '@/components/Home/CTASection';

export default function Home() {
  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why us */}
      <WhyUsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </Box>
  );
}
