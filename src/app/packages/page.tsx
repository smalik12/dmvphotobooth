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

const SectionCard = ({
  title,
  items,
  icon,
  color,
}: {
  title: string;
  items: string[];
  icon: JSX.Element;
  color: string;
}) => (
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
    <div
      className="flex items-center justify-center mb-4 text-3xl"
      style={{ color }}
    >
      {icon}
    </div>
    <Typography
      variant="h5"
      gutterBottom
      fontWeight="bold"
      sx={{ fontFamily: 'Shadows Into Light, cursive' }}
      className="text-center font-semibold text-gray-800"
    >
      {title}
    </Typography>
    <ul className="space-y-2 mt-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <FaCheckCircle className="text-[#004aad] mr-2" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function PackagesPage() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 mt-8">
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          className="font-bold text-gray-900 mb-12"
          sx={{ fontFamily: 'Shadows Into Light, cursive' }}
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

        {tabValue === 0 && (
          <div>
            <Typography
              variant="h6"
              gutterBottom
              textAlign="left"
              className="font-bold text-gray-900 mb-12"
              sx={{ fontFamily: 'Shadows Into Light, cursive' }}
            >
              Starting at $500
            </Typography>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SectionCard
                title="Basic Package"
                icon={<FaCamera />}
                color="#CD7F32"
                items={[
                  '3 Hours',
                  '2x6 or 4x6 prints',
                  'Unlimited prints',
                  'Custom photo template',
                  'Option to text/email photos',
                  'Props',
                  'Basic backdrop',
                  'Digital copy of all event photos',
                ]}
              />
              <SectionCard
                title="Standard Package"
                icon={<FaStar />}
                color="#C0C0C0"
                items={[
                  '4 Hours',
                  '2x6 or 4x6 prints',
                  'Unlimited prints',
                  'Custom photo template',
                  'Option to text/email photos',
                  'Custom props',
                  'Basic backdrop',
                  'Digital copy of all event photos',
                ]}
              />
              <SectionCard
                title="Premium Package"
                icon={<FaCrown />}
                color="#FFD700"
                items={[
                  '5 Hours',
                  '2x6 or 4x6 prints',
                  'Unlimited prints',
                  'Custom photo template',
                  'Option to text/email photos',
                  'Custom props',
                  'Basic backdrop',
                  'Digital copy of all event photos',
                ]}
              />
              <SectionCard
                title="Extras"
                icon={<FaClock />}
                color="#000000"
                items={['Every hour after 5 hours is an additional cost']}
              />
              <SectionCard
                title="Additional"
                icon={<FaGift />}
                color="#B22222"
                items={['Custom head props', 'Flower backdrop']}
              />
            </div>
          </div>
        )}

        {tabValue === 1 && (
          <Box textAlign="center">
            <Typography variant="h6" gutterBottom>
              360 Camera Packages
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Details about 360 camera packages will be added here.
            </Typography>
          </Box>
        )}
      </div>
    </div>
  );
}
