'use client';

import { Box, Container, Typography, Chip } from '@mui/material';
import { shadowsFont } from '@/theme';
import { useState } from 'react';
import { galleryImages } from '@/data/gallery';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Import PhotoView styles
import 'react-photo-view/dist/react-photo-view.css';

const MotionBox = motion(Box);

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', 'Weddings', 'Corporate', 'Parties'];

  const filteredImages = selectedCategory && selectedCategory !== 'All'
    ? galleryImages.filter((img) => img.category === selectedCategory)
    : galleryImages;

  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
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
            Our Portfolio
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Browse our collection of memorable moments
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

          {/* Gallery Grid with Lightbox */}
          <PhotoProvider
            maskOpacity={0.9}
            bannerVisible={false}
            speed={() => 300}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {filteredImages.map((image, index) => (
                <PhotoView key={index} src={image.src}>
                  <MotionBox
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    sx={{
                      position: 'relative',
                      cursor: 'pointer',
                      borderRadius: 2,
                      overflow: 'hidden',
                      mb: 2,
                      '&:hover .overlay': {
                        opacity: 1,
                      },
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={400}
                      height={300}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                    {/* Hover Overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.8) 0%, rgba(235, 206, 181, 0.8) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#fff',
                          fontWeight: 'bold',
                          mb: 1,
                          textAlign: 'center',
                          px: 2,
                        }}
                      >
                        {image.title}
                      </Typography>
                      <Chip
                        label={image.category}
                        size="small"
                        sx={{
                          backgroundColor: '#fff',
                          color: '#004aad',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                  </MotionBox>
                </PhotoView>
              ))}
            </Masonry>
          </PhotoProvider>

          {/* Masonry Grid Styles */}
          <style jsx global>{`
            .masonry-grid {
              display: flex;
              margin-left: -16px;
              width: auto;
            }
            .masonry-grid_column {
              padding-left: 16px;
              background-clip: padding-box;
            }
            .masonry-grid_column > div {
              margin-bottom: 16px;
            }
          `}</style>
        </MotionBox>
      </Container>
    </Box>
  );
}
