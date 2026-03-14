'use client';

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { shadowsFont } from '@/theme';
import { faqs } from '@/data/faqs';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const categories = ['All', 'Booking', 'Equipment', 'Pricing', 'Service'];

  const filteredFAQs = selectedCategory && selectedCategory !== 'All'
    ? faqs.filter((faq) => faq.category === selectedCategory)
    : faqs;

  return (
    <Box sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="black"
            fontFamily={shadowsFont.style.fontFamily}
            gutterBottom
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Find answers to common questions about our photo booth services
          </Typography>

          {/* Category Filter */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              mb: 4,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                sx={{
                  backgroundColor:
                    (selectedCategory === category) || (selectedCategory === null && category === 'All')
                      ? '#004aad'
                      : '#e0e0e0',
                  color:
                    (selectedCategory === category) || (selectedCategory === null && category === 'All')
                      ? '#fff'
                      : '#333',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor:
                      (selectedCategory === category) || (selectedCategory === null && category === 'All')
                        ? '#003580'
                        : '#d0d0d0',
                    transform: 'scale(1.05)',
                  },
                }}
              />
            ))}
          </Box>

          {/* FAQ Accordions */}
          <Box>
            {filteredFAQs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  '&.Mui-expanded': {
                    boxShadow: '0 4px 16px rgba(0, 74, 173, 0.15)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore
                      sx={{
                        color: '#004aad',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  }
                  sx={{
                    backgroundColor: expanded === `panel${index}` ? '#f0f7ff' : '#fff',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f7ff',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        flex: 1,
                        color: expanded === `panel${index}` ? '#004aad' : '#333',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {faq.question}
                    </Typography>
                    <Chip
                      label={faq.category}
                      size="small"
                      sx={{
                        backgroundColor: '#ebceb5',
                        color: '#004aad',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        display: { xs: 'none', sm: 'flex' },
                      }}
                    />
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#fff',
                    borderTop: '1px solid #e0e0e0',
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: '#555',
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
}
