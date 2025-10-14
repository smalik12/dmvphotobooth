import React from 'react';
import { Typography } from '@mui/material';
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

const Photo360Packages: React.FC = () => (
  <div>
    <Typography
      variant="h6"
      gutterBottom
      textAlign="left"
      className="font-bold text-gray-900 mb-12"
    >
      Starting at $600
    </Typography>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
      {packages.map((pkg) => (
        <PackageSectionCard
          key={pkg.title}
          title={pkg.title}
          icon={pkg.icon}
          items={pkg.items}
          color={pkg.color}
        />
      ))}
    </div>
  </div>
);

export default Photo360Packages;
