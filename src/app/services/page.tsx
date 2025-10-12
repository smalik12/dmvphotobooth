import { Typography, Link, Button } from '@mui/material';
import ServiceCard from './serviceCard';

const services = [
  {
    title: '360° Photo Booth (**Coming Soon**)',
    description:
      'Capture every angle with our immersive 360° photo booth — perfect for weddings, birthdays, and corporate events.',
    imageSrc: '/image1.png',
    imagePosition: 'left',
  },
  {
    title: 'Photo Booth',
    description:
      'Bring the red carpet look to your event with our photo booth — sleek, stylish, and stunning.',
    imageSrc: '/hero-photobooth.jpg',
    imagePosition: 'right',
  },
  {
    title: '360° Photo Booth',
    description:
      'Capture every angle with our immersive 360° photo booth — perfect for weddings, birthdays, and corporate events.',
    imageSrc: '/image1.png',
    imagePosition: 'left',
  },
  {
    title: 'Photo Booth',
    description:
      'Bring the red carpet look to your event with our photo booth — sleek, stylish, and stunning.',
    imageSrc: '/hero-photobooth.jpg',
    imagePosition: 'right',
  },
  {
    title: '360° Photo Booth',
    description:
      'Capture every angle with our immersive 360° photo booth — perfect for weddings, birthdays, and corporate events.',
    imageSrc: '/image1.png',
    imagePosition: 'left',
  },
  {
    title: 'Photo Booth',
    description:
      'Bring the red carpet look to your event with our photo booth — sleek, stylish, and stunning.',
    imageSrc: '/hero-photobooth.jpg',
    imagePosition: 'right',
  },
];

export default function Services() {
  return (
    <div style={{ marginTop: '80px' }}>
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

      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Event?</h2>
        <Link href="/contact">
          <Button variant="contained" color="secondary">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
