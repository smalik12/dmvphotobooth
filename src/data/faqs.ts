export interface FAQ {
  question: string;
  answer: string;
  category: 'Booking' | 'Equipment' | 'Pricing' | 'Service';
}

export const faqs: FAQ[] = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2-3 weeks in advance, especially for weddings and events during peak seasons (May-October). However, we can often accommodate last-minute bookings based on availability.',
    category: 'Booking',
  },
  {
    question: 'What areas do you service?',
    answer: 'We proudly serve the entire DMV area, including Washington DC, Maryland, and Virginia. We cover events within a 50-mile radius of the DC metro area. Contact us for events outside this range for custom quotes.',
    category: 'Service',
  },
  {
    question: 'How much space do you need for setup?',
    answer: 'For our standard photo booth, we need approximately 8x8 feet of space. For the 360 booth, we require 10x10 feet. We also need access to a standard electrical outlet within 20 feet of the setup location.',
    category: 'Equipment',
  },
  {
    question: 'Can we customize the photo templates and props?',
    answer: 'Absolutely! All packages include custom photo templates designed to match your event theme and colors. We also provide a selection of fun props, and you can request specific prop themes or provide your own.',
    category: 'Service',
  },
  {
    question: 'What\'s included in the pricing?',
    answer: 'Our packages include setup and breakdown, an attendant for the duration of your event, unlimited prints (for photo booth), custom templates, props, digital copies of all photos/videos, and delivery. Additional hours and premium backdrops are available for an extra fee.',
    category: 'Pricing',
  },
  {
    question: 'How long does setup take?',
    answer: 'Setup typically takes 45-60 minutes. We arrive well before your event start time to ensure everything is ready when your guests arrive. Breakdown takes approximately 30 minutes after your event concludes.',
    category: 'Equipment',
  },
  {
    question: 'Do you provide an attendant?',
    answer: 'Yes! All our packages include a professional attendant who will be present throughout your event to assist guests, troubleshoot any issues, and ensure the booth runs smoothly.',
    category: 'Service',
  },
  {
    question: 'What happens if there\'s a technical issue during my event?',
    answer: 'Our booths are professionally maintained and tested before every event. In the rare case of a technical issue, our attendant is trained to resolve most problems on the spot. We also carry backup equipment to minimize any downtime.',
    category: 'Equipment',
  },
  {
    question: 'Can guests share photos digitally?',
    answer: 'Yes! Guests can receive their photos/videos via text or email directly at the booth. They can instantly share them on social media. You\'ll also receive a digital gallery of all photos/videos within 48 hours of your event.',
    category: 'Service',
  },
  {
    question: 'Is there a travel fee?',
    answer: 'Events within 25 miles of Washington DC have no travel fee. For events 25-50 miles away, a small travel fee may apply. Contact us for a detailed quote based on your event location.',
    category: 'Pricing',
  },
  {
    question: 'What\'s your cancellation policy?',
    answer: 'We require a $100 deposit to secure your booking. If you need to cancel, deposits are refundable up to 30 days before your event. Cancellations within 30 days forfeit the deposit. We\'re happy to work with you on rescheduling when possible.',
    category: 'Booking',
  },
  {
    question: 'Do you offer packages for corporate events?',
    answer: 'Yes! We offer customized packages for corporate events, trade shows, and branding activations. These can include branded templates, social media integration, and data collection features. Contact us for a custom corporate quote.',
    category: 'Pricing',
  },
];
