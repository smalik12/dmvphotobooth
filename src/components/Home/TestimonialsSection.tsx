'use client';

import theme, { shadowsFont } from '@/theme';
import { Box, Container, Typography, Paper } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star } from '@mui/icons-material';
import { testimonials } from '@/data/testimonials';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function TestimonialsSection() {
  return (
    <div className="TestimonialsSection-root">
      <Box sx={{ py: 8, backgroundColor: theme.palette.secondary.main }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="black"
            fontFamily={shadowsFont.style.fontFamily}
            gutterBottom
          >
            What Our Clients Say
          </Typography>

          <Box sx={{ mt: 4, px: { xs: 2, md: 8 } }}>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              style={{
                paddingBottom: '50px',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      height: '100%',
                      minHeight: '280px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0, 74, 173, 0.15)',
                      },
                    }}
                  >
                    {/* Star Rating */}
                    <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          sx={{
                            color: i < testimonial.rating ? '#FFB800' : '#E0E0E0',
                            fontSize: '1.5rem',
                          }}
                        />
                      ))}
                    </Box>

                    {/* Quote */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: 'italic',
                        color: '#333',
                        lineHeight: 1.7,
                        mb: 2,
                        flexGrow: 1,
                      }}
                    >
                      &quot;{testimonial.quote}&quot;
                    </Typography>

                    {/* Author and Event Type */}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{ color: theme.palette.primary.main }}
                      >
                        {testimonial.author}
                      </Typography>
                      {testimonial.eventType && (
                        <Typography variant="caption" sx={{ color: '#666' }}>
                          {testimonial.eventType}
                        </Typography>
                      )}
                    </Box>
                  </Paper>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <style jsx global>{`
            .swiper-pagination-bullet {
              background: #004aad;
              opacity: 0.3;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
              background: #004aad;
            }
            .swiper-button-next,
            .swiper-button-prev {
              color: #004aad;
            }
            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 24px;
            }
          `}</style>
        </Container>
      </Box>
    </div>
  );
}
