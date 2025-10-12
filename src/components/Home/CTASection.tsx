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
          <Button variant="contained" size="large" color="success">
            Contact us!
            {/* USE CORNFLOWER BLUE */}
          </Button>
        </Link>
      </Box>
    </div>
  );
}
