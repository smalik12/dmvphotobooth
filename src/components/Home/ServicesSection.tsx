import { Box, Container, Grid2, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import theme from '@/theme';

export default function ServicesSection() {
  return (
    <div className="ServicesSection-root">
      <Container sx={{ py: 8 }} style={{ backgroundColor: '#f9f9f9' }}>
        <Grid2 container spacing={4} sx={{ mt: 2 }}>
          {[
            { title: 'Weddings', image: '/wedding-card-just-photo.jpg' },
            { title: 'Corporate Events', image: '/corporate-card.jpeg' },
            { title: 'Parties', image: '/birthday-card.jpg' },
          ].map((service, index) => (
            <Grid2 size={{ xs: 12, md: 4 }} key={index}>
              <Paper elevation={4} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                {
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    style={{ width: '100%', height: 200, objectFit: 'cover' }}
                  />
                }
                <Box p={2} textAlign="center">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    fontFamily={theme.typography.fontFamily}
                  >
                    {service.title}
                  </Typography>
                </Box>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
}
