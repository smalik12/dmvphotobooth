'use client';

import PackageSectionCard from '@/components/PackageSectionCard';
import { Typography, Skeleton, Box } from '@mui/material';
import { FaCamera, FaStar, FaCrown, FaClock, FaGift } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const packages = [
  {
    title: 'Basic Package',
    icon: <FaCamera />,
    color: '#CD7F32',
    items: [
      '3 Hours',
      '2x6 or 4x6 prints',
      'Unlimited prints',
      'Custom photo template',
      'Option to text/email photos',
      'Props',
      'Basic backdrop',
      'Digital copy of all event photos',
    ],
  },
  {
    title: 'Standard Package',
    icon: <FaStar />,
    color: '#C0C0C0',
    items: [
      '4 Hours',
      '2x6 or 4x6 prints',
      'Unlimited prints',
      'Custom photo template',
      'Option to text/email photos',
      'Custom props',
      'Basic backdrop',
      'Digital copy of all event photos',
    ],
  },
  {
    title: 'Premium Package',
    icon: <FaCrown />,
    color: '#FFD700',
    items: [
      '5 Hours',
      '2x6 or 4x6 prints',
      'Unlimited prints',
      'Custom photo template',
      'Option to text/email photos',
      'Custom props',
      'Basic backdrop',
      'Digital copy of all event photos',
    ],
  },
  {
    title: 'Extras',
    icon: <FaClock />,
    color: '#000000',
    items: ['Every hour after 5 hours is an additional cost'],
  },
  {
    title: 'Additional',
    icon: <FaGift />,
    color: '#B22222',
    items: ['Custom head props', 'Flower backdrop'],
  },
];

// Skeleton loader component for package cards
function PackageSkeleton() {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
      <Skeleton variant="text" width="60%" height={32} sx={{ mb: 2 }} />
      <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 1 }} />
    </Box>
  );
}

export default function PhotoBoothPackages() {
  // Set to false by default since data is static
  // Change to true when implementing async data fetching
  const [isLoading] = useState(false);

  // Simulate loading for demonstration (remove when implementing real async data)
  useEffect(() => {
    // This can be replaced with actual data fetching logic in the future
    // Example:
    // setIsLoading(true);
    // fetchPackages().then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="PhotoBoothPackages-root">
        <Skeleton variant="text" width={200} height={32} sx={{ mb: 4 }} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <PackageSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="PhotoBoothPackages-root">
      <Box
        sx={{
          mb: 6,
          p: 3,
          borderRadius: 3,
          background: 'linear-gradient(135deg, #ebceb5 0%, #d9b89f 100%)',
          color: '#333',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(235, 206, 181, 0.3)',
          border: '2px solid rgba(0, 74, 173, 0.1)',
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#333' }}>
          Photo Booth Packages
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, color: '#555' }}>
          Starting at <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#004aad' }}>$500</Box>
        </Typography>
      </Box>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map(({ title, icon, color, items }) => (
          <PackageSectionCard
            key={title}
            title={title}
            icon={icon}
            color={color}
            items={items}
            isPopular={title === 'Standard Package'}
            isBestValue={title === 'Premium Package'}
          />
        ))}
      </div>
    </div>
  );
}
