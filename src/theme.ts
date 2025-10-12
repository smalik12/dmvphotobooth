import { createTheme } from '@mui/material/styles';
import { Shadows_Into_Light } from 'next/font/google';

const shadows = Shadows_Into_Light({
  weight: '400',
  subsets: ['latin'],
});

const theme = createTheme({
  typography: {
    fontFamily: shadows.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#004aad',   // your blue
    },
    secondary: {
      main: '#f9f9f9',
    },
    background: {
      default: '#ebceb5', // your tan
      },
  },
});

export default theme;