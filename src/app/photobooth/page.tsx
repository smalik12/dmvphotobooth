'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, Box, Container, Typography, Chip, IconButton } from '@mui/material';
import { Close, ZoomIn } from '@mui/icons-material';
import { shadowsFont } from '@/theme';
import { motion } from 'framer-motion';
import { FaPalette, FaImage, FaMagic, FaCamera } from 'react-icons/fa';

const MotionBox = motion(Box);

export default function PhotoBoothInfoPage() {
  const templates = [
    { filename: '2x6option1', label: '2x6 Option 1' },
    { filename: '2x6option2', label: '2x6 Option 2' },
    { filename: '2x6option3', label: '2x6 Option 3' },
    { filename: '4x6option1', label: '4x6 Option 1' },
    { filename: '4x6option2', label: '4x6 Option 2' },
    { filename: '4x6option3', label: '4x6 Option 3' },
    { filename: '4x6option4', label: '4x6 Option 4' },
  ];

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [selectedBackdrop, setSelectedBackdrop] = useState<{
    src: string;
    alt: string;
    video: string;
  } | null>(null);

  const [openTemplate, setOpenTemplate] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    filename: string;
    label: string;
  } | null>(null);

  const [openCustomization, setOpenCustomization] = useState(false);
  const [selectedCustomization, setSelectedCustomization] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const backdrops = [
    {
      src: '/photobooth/backdrops/black.jpg',
      alt: 'Black Backdrop',
      label: 'BLACK',
      video: '/photobooth/backdrops/black-slideshow.mp4',
    },
    {
      src: '/photobooth/backdrops/silver.png',
      alt: 'Silver Backdrop',
      label: 'SILVER',
      video: '/photobooth/backdrops/silver-slideshow.mp4',
    },
    {
      src: '/photobooth/backdrops/rosegold.jpg',
      alt: 'Rose Gold Backdrop',
      label: 'ROSE GOLD',
      video: '/photobooth/backdrops/rosegold-slideshow.mp4',
    },
    {
      src: '/photobooth/backdrops/gold.jpg',
      alt: 'Gold Backdrop',
      label: 'GOLD',
      video: '/photobooth/backdrops/gold-slideshow.mp4',
    },
    {
      src: '/photobooth/backdrops/white.png',
      alt: 'White Backdrop',
      label: 'WHITE',
      video: '/photobooth/backdrops/white-slideshow.mp4',
    },
    {
      src: '/photobooth/backdrops/white-flower.png',
      alt: 'White Flower Backdrop (Extra Cost)',
      label: 'WHITE FLOWER',
      video: '/photobooth/backdrops/white-flower-slideshow.mp4',
      isExtra: true,
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      {/* Hero Section with Tan/Peach Gradient */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ebceb5 0%, #d9b89f 100%)',
          color: '#333',
          pt: { xs: 16, md: 20 },
          pb: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Decorations */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 74, 173, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              fontFamily={shadowsFont.style.fontFamily}
              sx={{
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.1)',
              }}
            >
              Photo Booth Experience
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              Explore our stunning backdrops, creative templates, and endless customization options to make your event truly unforgettable
            </Typography>

            {/* Feature Icons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 3, md: 5 },
                flexWrap: 'wrap',
                mt: 4,
              }}
            >
              {[
                { icon: <FaImage />, label: 'Premium Backdrops' },
                { icon: <FaPalette />, label: 'Custom Templates' },
                { icon: <FaMagic />, label: 'Full Customization' },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '1rem',
                    color: '#555',
                  }}
                >
                  <Box sx={{ fontSize: '1.5rem', color: '#004aad' }}>{item.icon}</Box>
                  <Typography variant="body1" fontWeight={600}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Backdrops Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          sx={{ mb: 10 }}
        >
          <Box
            sx={{
              mb: 5,
              textAlign: 'center',
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(235, 206, 181, 0.3) 0%, rgba(217, 184, 159, 0.3) 100%)',
              border: '2px solid #ebceb5',
            }}
          >
            <FaCamera style={{ fontSize: '3rem', color: '#004aad', marginBottom: '16px' }} />
            <Typography
              variant="h3"
              fontWeight="bold"
              fontFamily={shadowsFont.style.fontFamily}
              sx={{ mb: 1, color: '#333' }}
            >
              Backdrops
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', maxWidth: 600, mx: 'auto' }}>
              Choose from our elegant collection of professional backdrops to perfectly complement your event
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(6, 1fr)',
              },
              gap: 3,
            }}
          >
            {backdrops.map(({ src, alt, label, video, isExtra }) => (
              <MotionBox
                key={src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  setSelectedBackdrop({ src, alt, video });
                  setOpenBackdrop(true);
                }}
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  p: 2,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(235, 206, 181, 0.4)',
                  },
                  '&:hover .zoom-icon': {
                    opacity: 1,
                  },
                }}
              >
                <Box sx={{ position: 'relative', aspectRatio: '1', mb: 1 }}>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <Box
                    className="zoom-icon"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      borderRadius: '50%',
                      p: 0.5,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <ZoomIn sx={{ color: '#fff', fontSize: '1.2rem' }} />
                  </Box>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                    display: 'block',
                    textAlign: 'center',
                    color: '#555',
                  }}
                >
                  {label}
                </Typography>
                {isExtra && (
                  <Chip
                    label="Extra"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      backgroundColor: '#ebceb5',
                      color: '#333',
                      fontWeight: 'bold',
                      fontSize: '0.7rem',
                    }}
                  />
                )}
              </MotionBox>
            ))}
          </Box>
        </MotionBox>

        {/* Photo Templates Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          sx={{ mb: 10 }}
        >
          <Box
            sx={{
              mb: 5,
              textAlign: 'center',
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.1) 0%, rgba(235, 206, 181, 0.2) 100%)',
              border: '2px solid #004aad',
            }}
          >
            <FaImage style={{ fontSize: '3rem', color: '#ebceb5', marginBottom: '16px' }} />
            <Typography
              variant="h3"
              fontWeight="bold"
              fontFamily={shadowsFont.style.fontFamily}
              sx={{ mb: 1, color: '#333' }}
            >
              Photo Templates
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', maxWidth: 600, mx: 'auto' }}>
              Select from our professionally designed templates for the perfect keepsake
            </Typography>
          </Box>

          {/* 2x6 Templates */}
          <Box sx={{ mb: 8 }}>
            <Box
              sx={{
                mb: 4,
                p: 3,
                borderRadius: 2,
                backgroundColor: 'rgba(235, 206, 181, 0.2)',
                borderLeft: '4px solid #ebceb5',
              }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: '#333' }}>
                2x6 Templates
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Our most popular strip gives your guests a fun-sized keepsake from your special day. Select from 2, 3, or 4 captures per photo.
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
                gap: 3,
              }}
            >
              {templates
                .filter(({ filename }) => filename.startsWith('2x6'))
                .map(({ filename, label }) => (
                  <MotionBox
                    key={filename}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    onClick={() => {
                      setSelectedTemplate({ filename, label });
                      setOpenTemplate(true);
                    }}
                    sx={{
                      position: 'relative',
                      cursor: 'pointer',
                      borderRadius: 2,
                      overflow: 'hidden',
                      backgroundColor: '#fff',
                      p: 2,
                      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 24px rgba(0, 74, 173, 0.2)',
                      },
                      '&:hover .zoom-icon': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: 220, mb: 2 }}>
                      <Image
                        src={`/photobooth/templates/${filename}.png`}
                        alt={label}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                      <Box
                        className="zoom-icon"
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: 'rgba(235, 206, 181, 0.9)',
                          borderRadius: '50%',
                          p: 0.5,
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        }}
                      >
                        <ZoomIn sx={{ color: '#004aad', fontSize: '1.2rem' }} />
                      </Box>
                    </Box>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      textAlign="center"
                      sx={{ color: '#555' }}
                    >
                      {label}
                    </Typography>
                  </MotionBox>
                ))}
            </Box>
          </Box>

          {/* 4x6 Templates */}
          <Box>
            <Box
              sx={{
                mb: 4,
                p: 3,
                borderRadius: 2,
                backgroundColor: 'rgba(0, 74, 173, 0.05)',
                borderLeft: '4px solid #004aad',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Typography variant="h5" fontWeight="bold" sx={{ color: '#333' }}>
                  4x6 Templates
                </Typography>
                <Chip
                  label="Extra Cost"
                  size="small"
                  sx={{
                    backgroundColor: '#ebceb5',
                    color: '#333',
                    fontWeight: 'bold',
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: '#666' }}>
                The full-size photo is a great option as well! Select from 1, 2, or 3 captures per photo.
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
                gap: 3,
              }}
            >
              {templates
                .filter(({ filename }) => filename.startsWith('4x6'))
                .map(({ filename, label }) => (
                  <MotionBox
                    key={filename}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    onClick={() => {
                      setSelectedTemplate({ filename, label });
                      setOpenTemplate(true);
                    }}
                    sx={{
                      position: 'relative',
                      cursor: 'pointer',
                      borderRadius: 2,
                      overflow: 'hidden',
                      backgroundColor: '#fff',
                      p: 2,
                      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 24px rgba(235, 206, 181, 0.4)',
                      },
                      '&:hover .zoom-icon': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: 220, mb: 2 }}>
                      <Image
                        src={`/photobooth/templates/${filename}.png`}
                        alt={label}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                      <Box
                        className="zoom-icon"
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          backgroundColor: 'rgba(235, 206, 181, 0.9)',
                          borderRadius: '50%',
                          p: 0.5,
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        }}
                      >
                        <ZoomIn sx={{ color: '#004aad', fontSize: '1.2rem' }} />
                      </Box>
                    </Box>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      textAlign="center"
                      sx={{ color: '#555' }}
                    >
                      {label}
                    </Typography>
                  </MotionBox>
                ))}
            </Box>
          </Box>
        </MotionBox>

        {/* Customization Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              mb: 5,
              textAlign: 'center',
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(235, 206, 181, 0.3) 0%, rgba(0, 74, 173, 0.1) 100%)',
              border: '2px solid #ebceb5',
            }}
          >
            <FaMagic style={{ fontSize: '3rem', color: '#004aad', marginBottom: '16px' }} />
            <Typography
              variant="h3"
              fontWeight="bold"
              fontFamily={shadowsFont.style.fontFamily}
              sx={{ mb: 2, color: '#333' }}
            >
              Customization
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', maxWidth: 700, mx: 'auto' }}>
              Customize your photo templates with personalized text, logos, and colors to perfectly match your event branding or theme. Our design team works with you to create a unique look that your guests will love.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {Array.from({ length: 9 }).map((_, idx) => {
              const n = idx + 1;
              return (
                <MotionBox
                  key={n}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => {
                    setSelectedCustomization({
                      src: `/photobooth/customization/template${n}.png`,
                      alt: `Custom Template ${n}`,
                    });
                    setOpenCustomization(true);
                  }}
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    borderRadius: 2,
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    p: 2,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 12px 28px rgba(235, 206, 181, 0.5)',
                    },
                    '&:hover .zoom-icon': {
                      opacity: 1,
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', height: 280 }}>
                    <Image
                      src={`/photobooth/customization/template${n}.png`}
                      alt={`Custom Template ${n}`}
                      fill
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <Box
                      className="zoom-icon"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'rgba(235, 206, 181, 0.95)',
                        borderRadius: '50%',
                        p: 0.5,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <ZoomIn sx={{ color: '#004aad', fontSize: '1.2rem' }} />
                    </Box>
                  </Box>
                </MotionBox>
              );
            })}
          </Box>
        </MotionBox>
      </Container>

      {/* Enhanced Dialogs */}
      <Dialog
        open={openBackdrop}
        onClose={() => setOpenBackdrop(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            backgroundColor: '#f9f9f9',
          },
        }}
      >
        <Box sx={{ position: 'relative', p: 3 }}>
          <IconButton
            onClick={() => setOpenBackdrop(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: '#ebceb5',
              '&:hover': {
                backgroundColor: '#d9b89f',
              },
            }}
          >
            <Close />
          </IconButton>
          {selectedBackdrop && (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: '#333' }}>
                {selectedBackdrop.alt}
              </Typography>
              <Image
                src={selectedBackdrop.src}
                alt={selectedBackdrop.alt}
                width={500}
                height={500}
                style={{ objectFit: 'contain', borderRadius: '12px', marginBottom: '20px' }}
              />
              <video
                controls
                style={{
                  maxWidth: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
                src={selectedBackdrop.video}
              />
            </Box>
          )}
        </Box>
      </Dialog>

      <Dialog
        open={openTemplate}
        onClose={() => setOpenTemplate(false)}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 3,
            backgroundColor: '#f9f9f9',
          },
        }}
      >
        <Box sx={{ position: 'relative', p: 3, textAlign: 'center' }}>
          <IconButton
            onClick={() => setOpenTemplate(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: '#ebceb5',
              '&:hover': {
                backgroundColor: '#d9b89f',
              },
            }}
          >
            <Close />
          </IconButton>
          {selectedTemplate && (
            <>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: '#333' }}>
                {selectedTemplate.label}
              </Typography>
              <Image
                src={`/photobooth/templates/${selectedTemplate.filename}.png`}
                alt={selectedTemplate.label}
                width={400}
                height={600}
                style={{ objectFit: 'contain', borderRadius: '12px' }}
              />
            </>
          )}
        </Box>
      </Dialog>

      <Dialog
        open={openCustomization}
        onClose={() => setOpenCustomization(false)}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 3,
            backgroundColor: '#f9f9f9',
          },
        }}
      >
        <Box sx={{ position: 'relative', p: 3, textAlign: 'center' }}>
          <IconButton
            onClick={() => setOpenCustomization(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: '#ebceb5',
              '&:hover': {
                backgroundColor: '#d9b89f',
              },
            }}
          >
            <Close />
          </IconButton>
          {selectedCustomization && (
            <>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: '#333' }}>
                Custom Template Example
              </Typography>
              <Image
                src={selectedCustomization.src}
                alt={selectedCustomization.alt}
                width={400}
                height={600}
                style={{ objectFit: 'contain', borderRadius: '12px' }}
              />
            </>
          )}
        </Box>
      </Dialog>
    </Box>
  );
}
