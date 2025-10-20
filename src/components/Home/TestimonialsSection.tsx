import theme, { shadowsFont } from '@/theme';
import { Box, Container, Typography, Grid2, Paper } from '@mui/material';

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
          <Grid2 container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                quote: 'You guys are great, thank you for everything!',
                author: 'JK House of Grace, Assisted Living',
              },
              {
                quote:
                  'We are extremely happy with the memories we now have forever thanks to your services!',
                author: 'Jorge & Wendy Hernandez',
              },
              {
                quote:
                  'The set up and staff were so professional and the photos came out so beautiful, I have recommended them to all my family and friends!',
                author: 'Saqib & Candy Malik',
              },
            ].map((testimonial, index) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={index}>
                <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    “{testimonial.quote}”
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    - {testimonial.author}
                  </Typography>
                </Paper>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
}
