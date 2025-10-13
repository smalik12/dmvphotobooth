import PackageSectionCard from '@/components/PackageSectionCard';
import { Typography } from '@mui/material';
import { FaCamera, FaStar, FaCrown, FaClock, FaGift } from 'react-icons/fa';

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

export default function PhotoBoothPackages() {
  return (
    <div className="PhotoBoothPackages-root">
      <Typography
        variant="h6"
        gutterBottom
        textAlign="left"
        className="font-bold text-gray-900 mb-12"
      >
        Starting at $500
      </Typography>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map(({ title, icon, color, items }) => (
          <PackageSectionCard
            key={title}
            title={title}
            icon={icon}
            color={color}
            items={items}
          />
        ))}
      </div>
    </div>
  );
}
