export interface Testimonial {
  quote: string;
  author: string;
  rating: number; // 1-5 stars
  eventType?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'You guys are great, thank you for everything!',
    author: 'JK House of Grace, Assisted Living',
    rating: 5,
    eventType: 'Corporate Event',
  },
  {
    quote: 'We are extremely happy with the memories we now have forever thanks to your services!',
    author: 'Jorge & Wendy Hernandez',
    rating: 5,
    eventType: 'Wedding',
  },
  {
    quote: 'The set up and staff were so professional and the photos came out so beautiful, I have recommended them to all my family and friends!',
    author: 'Saqib & Candy Malik',
    rating: 5,
    eventType: 'Wedding',
  },
];
