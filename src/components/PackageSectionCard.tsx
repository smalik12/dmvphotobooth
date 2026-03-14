'use client';

import React, { JSX } from 'react';
import { Typography, Box, Button, Chip } from '@mui/material';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { shadowsFont } from '@/theme';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface IPackageSectionCardProps {
  title: string;
  items: string[];
  icon: JSX.Element;
  color: string;
  isPopular?: boolean;
  isBestValue?: boolean;
}

const MotionBox = motion(Box);

export default function PackageSectionCard({
  title,
  items,
  icon,
  color,
  isPopular = false,
  isBestValue = false,
}: IPackageSectionCardProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      sx={{
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 3,
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isPopular ? '0 8px 32px rgba(0, 74, 173, 0.2)' : '0 4px 16px rgba(0, 0, 0, 0.08)',
        border: isPopular ? '2px solid #004aad' : '1px solid #e0e0e0',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isPopular ? 'scale(1.05)' : 'scale(1)',
        '&:hover': {
          transform: isPopular ? 'scale(1.08) translateY(-8px)' : 'scale(1.03) translateY(-8px)',
          boxShadow: '0 12px 40px rgba(0, 74, 173, 0.25)',
        },
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <Chip
          icon={<FaStar />}
          label="Most Popular"
          sx={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#004aad',
            color: '#fff',
            fontWeight: 'bold',
            '& .MuiChip-icon': {
              color: '#FFD700',
            },
          }}
        />
      )}

      {/* Best Value Badge */}
      {isBestValue && !isPopular && (
        <Chip
          label="Best Value"
          sx={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#10B981',
            color: '#fff',
            fontWeight: 'bold',
          }}
        />
      )}

      {/* Icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: `${color}20`,
          margin: '0 auto',
          mb: 3,
          fontSize: '2rem',
          color: color,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'rotate(10deg) scale(1.1)',
          },
        }}
      >
        {icon}
      </Box>

      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        fontFamily={shadowsFont.style.fontFamily}
        sx={{
          mb: 3,
          color: '#333',
        }}
      >
        {title}
      </Typography>

      {/* Features List */}
      <Box sx={{ flex: 1, mb: 3 }}>
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
          {items.map((item, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 2,
                color: '#555',
                fontSize: '0.95rem',
              }}
            >
              <FaCheckCircle
                style={{
                  color: '#004aad',
                  marginRight: '12px',
                  marginTop: '4px',
                  flexShrink: 0,
                  fontSize: '1rem',
                }}
              />
              <span>{item}</span>
            </Box>
          ))}
        </Box>
      </Box>

      {/* CTA Button - Only for main packages, not extras/additional */}
      {!title.toLowerCase().includes('extra') && !title.toLowerCase().includes('additional') && (
        <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 'auto',
              py: 1.5,
              background: isPopular
                ? 'linear-gradient(135deg, #004aad 0%, #0056c9 100%)'
                : 'linear-gradient(135deg, #555 0%, #777 100%)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '9999px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 74, 173, 0.3)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                transition: 'left 0.5s ease',
              },
              '&:hover': {
                background: isPopular
                  ? 'linear-gradient(135deg, #0056c9 0%, #004aad 100%)'
                  : 'linear-gradient(135deg, #777 0%, #555 100%)',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0, 74, 173, 0.4)',
              },
              '&:hover::before': {
                left: '100%',
              },
            }}
          >
            Book This Package
          </Button>
        </Link>
      )}
    </MotionBox>
  );
}
