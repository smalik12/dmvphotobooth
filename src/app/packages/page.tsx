'use client';
import React, { JSX, useState } from 'react';
import { Typography, Tabs, Tab, Box } from '@mui/material';
import {
  FaCamera,
  FaStar,
  FaCrown,
  FaClock,
  FaGift,
  FaCheckCircle,
  FaCameraRetro,
  FaVideo,
} from 'react-icons/fa';
import PhotoBoothPackages from '@/components/PhotoBoothPackages';
import Photo360Packages from '@/components/Photo360Packages';

export default function PackagesPage() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div className="min-h-screen mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 mt-8">
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          className="font-bold text-gray-900 mb-12"
        >
          Our Packages
        </Typography>

        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          variant="fullWidth"
          sx={{
            backgroundColor: '#f1f1f1',
            borderRadius: '9999px',
            mx: 'auto',
            maxWidth: 600,
          }}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            icon={<FaCameraRetro />}
            iconPosition="start"
            label="Photo Booth"
            sx={{
              fontWeight: tabValue === 0 ? 'bold' : 'normal',
              color: tabValue === 0 ? 'secondary.main' : 'black',
              justifyContent: 'center',
            }}
          />
          <Tab
            icon={<FaVideo />}
            iconPosition="start"
            label="360 Camera"
            sx={{
              fontWeight: tabValue === 1 ? 'bold' : 'normal',
              color: tabValue === 1 ? 'secondary.main' : 'black',
              justifyContent: 'center',
            }}
          />
        </Tabs>

        {tabValue === 0 && <PhotoBoothPackages />}

        {tabValue === 1 && <Photo360Packages />}
      </div>
    </div>
  );
}
