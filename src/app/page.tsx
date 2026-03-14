'use client';
import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import theme from '@/theme';
import WhyUsSection from '@/components/Home/WhyUsSection';
import ProcessSection from '@/components/Home/ProcessSection';
import StatsSection from '@/components/Home/StatsSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import FAQSection from '@/components/Home/FAQSection';
import GallerySection from '@/components/Home/GallerySection';
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

      {/* Process Timeline */}
      <ProcessSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </Box>
  );
}
