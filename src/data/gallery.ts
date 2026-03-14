export interface GalleryImage {
  src: string;
  category: 'Weddings' | 'Corporate' | 'Parties';
  title: string;
}

export const galleryImages: GalleryImage[] = [
  // Weddings
  {
    src: '/wedding-card-just-photo.JPG',
    category: 'Weddings',
    title: 'Wedding Celebration',
  },
  {
    src: '/photobooth/backdrops/white-flower.png',
    category: 'Weddings',
    title: 'Elegant Flower Backdrop',
  },
  {
    src: '/photobooth/backdrops/rosegold.jpg',
    category: 'Weddings',
    title: 'Rose Gold Elegance',
  },
  {
    src: '/photobooth/customization/template1.png',
    category: 'Weddings',
    title: 'Custom Wedding Template',
  },
  {
    src: '/photobooth/customization/template3.png',
    category: 'Weddings',
    title: 'Wedding Photo Template',
  },

  // Corporate Events
  {
    src: '/corporate-card.jpeg',
    category: 'Corporate',
    title: 'Corporate Event',
  },
  {
    src: '/photobooth/backdrops/black.jpg',
    category: 'Corporate',
    title: 'Professional Black Backdrop',
  },
  {
    src: '/photobooth/backdrops/silver.png',
    category: 'Corporate',
    title: 'Silver Backdrop',
  },
  {
    src: '/photobooth/customization/template5.png',
    category: 'Corporate',
    title: 'Corporate Branding Template',
  },

  // Parties
  {
    src: '/birthday-card.jpg',
    category: 'Parties',
    title: 'Birthday Party',
  },
  {
    src: '/photobooth/backdrops/gold.jpg',
    category: 'Parties',
    title: 'Gold Party Backdrop',
  },
  {
    src: '/photobooth/backdrops/white.png',
    category: 'Parties',
    title: 'White Backdrop',
  },
  {
    src: '/photobooth/customization/template2.png',
    category: 'Parties',
    title: 'Fun Party Template',
  },
  {
    src: '/photobooth/customization/template4.png',
    category: 'Parties',
    title: 'Colorful Party Design',
  },
  {
    src: '/photobooth/customization/template6.png',
    category: 'Parties',
    title: 'Party Template',
  },
];
