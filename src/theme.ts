import { createTheme, Shadows } from '@mui/material/styles';
import { Shadows_Into_Light } from 'next/font/google';

export const shadowsFont = Shadows_Into_Light({
  weight: '400',
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#004aad',   // your blue
      dark: '#003580',
      light: '#0056c9',
    },
    secondary: {
      main: '#f9f9f9',
    },
    background: {
      default: '#ebceb5', // your tan
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    h1: {
      fontSize: '3.5rem',      // 56px
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:900px)': {
        fontSize: '2.5rem',    // 40px on mobile
      },
    },
    h2: {
      fontSize: '3rem',        // 48px
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      '@media (max-width:900px)': {
        fontSize: '2rem',      // 32px on mobile
      },
    },
    h3: {
      fontSize: '2.25rem',     // 36px
      fontWeight: 700,
      lineHeight: 1.3,
      '@media (max-width:900px)': {
        fontSize: '1.75rem',   // 28px on mobile
      },
    },
    h4: {
      fontSize: '1.875rem',    // 30px
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:900px)': {
        fontSize: '1.5rem',    // 24px on mobile
      },
    },
    h5: {
      fontSize: '1.5rem',      // 24px
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (max-width:900px)': {
        fontSize: '1.25rem',   // 20px on mobile
      },
    },
    h6: {
      fontSize: '1.25rem',     // 20px
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',        // 16px
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',    // 14px
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  spacing: 8, // 8px base unit
  shape: {
    borderRadius: 12, // Default border radius
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 12px 24px rgba(0, 0, 0, 0.12)',
    '0px 16px 32px rgba(0, 0, 0, 0.15)',
    '0px 20px 40px rgba(0, 0, 0, 0.18)',
    '0px 24px 48px rgba(0, 0, 0, 0.2)',
    '0px 32px 64px rgba(0, 0, 0, 0.22)',
    // Add more shadows as needed (MUI requires 25)
    ...Array(16).fill('0px 32px 64px rgba(0, 0, 0, 0.25)'),
  ] as unknown as Shadows,
});

export default theme;