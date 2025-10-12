import theme from '@/theme';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="CTASection-root">
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          backgroundColor: theme.palette.background.default,
          color: '#fff',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="black"
          fontFamily={theme.typography.fontFamily}
          gutterBottom
        >
          Ready to Book Your Event?
        </Typography>
        <Link href="/contact" passHref legacyBehavior>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'primary.main',
              color: '#fff',
              borderRadius: '9999px',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              },
            }}
          >
            Contact us!
          </Button>
        </Link>
      </Box>
    </div>
  );
}
