'use client';

import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  MenuItem,
} from '@mui/material';
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import theme from '@/theme';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    eventType: '',
    zipCode: '',
    guestCount: '',
    boothType: '',
    phone: '',
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // clear error
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // submit logic (e.g. send to API or email service)
    console.log('Submitting', form);
    // optionally reset
    // setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        py: 8,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 10, // Add top margin to create space from persistent Navbar
      }}
    >
      <Paper
        elevation={8}
        sx={{
          maxWidth: 600,
          width: '100%',
          p: 4,
          borderRadius: 3,
          position: 'relative',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255,255,255,0.9)',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            textAlign: 'center',
          }}
        >
          Get in Touch
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
          Have a question, idea, or just want to say hi? I&apos;d love to hear
          from you. Fill out the form below, or email/call me directly.
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />

          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            select
            label="What type of event"
            variant="outlined"
            fullWidth
            value={form.eventType}
            onChange={(e) => handleChange('eventType', e.target.value)}
          >
            <MenuItem value="Wedding">Wedding</MenuItem>
            <MenuItem value="Party">Party</MenuItem>
            <MenuItem value="Corporate Event">Corporate Event</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>

          <TextField
            label="Zip Code of Location"
            variant="outlined"
            fullWidth
            value={form.zipCode}
            onChange={(e) => handleChange('zipCode', e.target.value)}
          />

          <TextField
            label="Number of Guests"
            variant="outlined"
            fullWidth
            type="number"
            value={form.guestCount}
            onChange={(e) => handleChange('guestCount', e.target.value)}
          />

          <TextField
            select
            label="Which Booth"
            variant="outlined"
            fullWidth
            value={form.boothType}
            onChange={(e) => handleChange('boothType', e.target.value)}
          >
            <MenuItem value="360 Booth">360 Booth</MenuItem>
            <MenuItem value="Regular Booth">Regular Booth</MenuItem>
          </TextField>

          <TextField
            label="Best Contact Number"
            variant="outlined"
            fullWidth
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />

          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            error={Boolean(errors.message)}
            helperText={errors.message}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="subtitle1" gutterBottom>
            Or reach me via:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <MuiLink
              href="mailto:info@dmvphotobooth.com"
              color="inherit"
              underline="none"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <FaEnvelope /> Email
            </MuiLink>
            <MuiLink
              href="tel:123-456-7890"
              color="inherit"
              underline="none"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <FaPhone /> Call
            </MuiLink>
          </Box>
          <Box
            sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}
          >
            <MuiLink
              href="https://www.instagram.com/dmvphotobooth"
              target="_blank"
              rel="noopener"
            >
              <FaInstagram size={24} />
            </MuiLink>
            <MuiLink
              href="https://www.facebook.com/dmvphotobooth"
              target="_blank"
              rel="noopener"
            >
              <FaFacebook size={24} />
            </MuiLink>
            <MuiLink
              href="https://www.tiktok.com/@dmvphotobooth"
              target="_blank"
              rel="noopener"
            >
              <FaTiktok size={24} />
            </MuiLink>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
