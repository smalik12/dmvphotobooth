'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Skeleton, Box } from '@mui/material';
import { FaCrown, FaStar, FaRegClock, FaCamera } from 'react-icons/fa';
import PackageSectionCard from './PackageSectionCard';

const packages = [
  {
    title: 'Basic Package',
    icon: <FaCamera size={32} />,
    color: '#cd7f32',
    items: [
      '3 Hours',
      'Unlimited HD videos',
      'Custom video template w/ music',
      'Option to text/email videos',
      'Props',
      'Stanchion poles - for safety',
      'Digital copy of all event videos',
    ],
  },
  {
    title: 'Standard Package',
    icon: <FaStar size={32} />,
    color: '#C0C0C0',
    items: [
      '4 Hours',
      'Unlimited HD videos',
      'Custom video template w/ music',
      'Option to text/email videos',
      'Props',
      'Stanchion poles - for safety',
      'Digital copy of all event videos',
    ],
  },
  {
    title: 'Premium Package',
    icon: <FaCrown size={32} />,
    color: '#FFD700',
    items: [
      '5 Hours',
      'Unlimited HD videos',
      'Custom video template w/ music',
      'Option to text/email videos',
      'Props',
      'Stanchion poles - for safety',
      'Digital copy of all event videos',
    ],
  },
  {
    title: 'Extras',
    icon: <FaRegClock size={32} />,
    color: '#111',
    items: ['Every hour after 5 hours is an additional cost.'],
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

const Photo360Packages: React.FC = () => {
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
      <div>
        <Skeleton variant="text" width={200} height={32} sx={{ mb: 4 }} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {[1, 2, 3, 4].map((i) => (
            <PackageSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
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
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 1, color: '#333' }}
        >
          360 Booth Packages
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, color: '#555' }}>
          Starting at{' '}
          <Box
            component="span"
            sx={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#004aad' }}
          >
            $150 per hour
          </Box>
        </Typography>
      </Box>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {packages.map((pkg) => (
          <PackageSectionCard
            key={pkg.title}
            title={pkg.title}
            icon={pkg.icon}
            items={pkg.items}
            color={pkg.color}
            isPopular={pkg.title === 'Standard Package'}
            isBestValue={pkg.title === 'Premium Package'}
          />
        ))}
      </div>
    </div>
  );
};

export default Photo360Packages;
