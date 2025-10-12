import { Typography } from '@mui/material';
import ServiceCard from './serviceCard';

const services = [
  {
    title: 'Photo Booth',
    description:
      'Bring the red carpet look to your event with our photo booth — sleek, stylish, and stunning.',
    imageSrc: '/hero-photobooth.jpg',
    imagePosition: 'left',
  },
  {
    title: '360° Photo Booth',
    description:
      'Capture every angle with our immersive 360° photo booth — perfect for weddings, birthdays, and corporate events.',
    imageSrc: '/image1.png',
    imagePosition: 'right',
  },
];

export default function Services() {
  return (
    <div style={{ marginTop: '120px' }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Our Services
      </Typography>
      <div className="max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            className="transition-transform duration-300 hover:scale-105"
            key={index}
          >
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imagePosition={service.imagePosition}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
