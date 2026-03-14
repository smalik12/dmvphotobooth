'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  MenuItem,
  Container,
  Grid2,
  Card,
  CardContent,
} from '@mui/material';
import {
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from 'react-icons/fa';
import { CheckCircle } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { shadowsFont } from '@/theme';
import { contactInfo } from '@/config/contact';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validFields, setValidFields] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  const maxMessageLength = 500;

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    // Real-time validation
    if (field === 'name') {
      if (value.trim()) {
        setValidFields((prev) => ({ ...prev, name: true }));
        setErrors((prev) => ({ ...prev, name: undefined }));
      } else {
        setValidFields((prev) => ({ ...prev, name: false }));
      }
    }

    if (field === 'email') {
      if (/^\S+@\S+\.\S+$/.test(value)) {
        setValidFields((prev) => ({ ...prev, email: true }));
        setErrors((prev) => ({ ...prev, email: undefined }));
      } else {
        setValidFields((prev) => ({ ...prev, email: false }));
      }
    }

    if (field === 'message') {
      if (value.trim() && value.length <= maxMessageLength) {
        setValidFields((prev) => ({ ...prev, message: true }));
        setErrors((prev) => ({ ...prev, message: undefined }));
      } else {
        setValidFields((prev) => ({ ...prev, message: false }));
      }
    }
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

    setIsSubmitting(true);
    const sendingToast = toast.loading('Sending your message...');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          eventType: form.eventType,
          zipCode: form.zipCode,
          guestCount: form.guestCount,
          boothType: form.boothType,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )
      .then(() => {
        toast.success(
          "Message sent successfully! We'll get back to you soon.",
          {
            id: sendingToast,
          },
        );
        setForm({
          name: '',
          email: '',
          message: '',
          eventType: '',
          zipCode: '',
          guestCount: '',
          boothType: '',
          phone: '',
        });
        setValidFields({});
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast.error(
          'Failed to send message. Please try again or contact us directly.',
          {
            id: sendingToast,
          },
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      {/* Hero Section */}
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
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0, 74, 173, 0.1) 0%, transparent 70%)',
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
            <FaPaperPlane
              style={{
                fontSize: '3.5rem',
                color: '#004aad',
                marginBottom: '16px',
              }}
            />
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
              Get in Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                opacity: 0.9,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              Ready to make your event unforgettable? Let&apos;s talk about your
              special day!
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#666', maxWidth: 600, mx: 'auto' }}
            >
              Fill out the form below or reach out directly via phone, email, or
              social media
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid2 container spacing={4}>
          {/* Contact Form */}
          <Grid2 size={{ xs: 12, md: 7 }}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 20px rgba(0, 74, 173, 0.1)',
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  fontFamily={shadowsFont.style.fontFamily}
                  sx={{ mb: 1, color: '#333' }}
                >
                  Send Us a Message
                </Typography>
                <Typography variant="body2" sx={{ mb: 4, color: '#666' }}>
                  Fill out the form and we&apos;ll get back to you within 24
                  hours
                </Typography>

                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
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
                    disabled={isSubmitting}
                    InputProps={{
                      endAdornment: validFields.name && (
                        <CheckCircle sx={{ color: '#10B981' }} />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#004aad',
                          boxShadow: '0 0 0 3px rgba(0, 74, 173, 0.1)',
                        },
                      },
                    }}
                  />

                  <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    disabled={isSubmitting}
                    InputProps={{
                      endAdornment: validFields.email && (
                        <CheckCircle sx={{ color: '#10B981' }} />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#004aad',
                          boxShadow: '0 0 0 3px rgba(0, 74, 173, 0.1)',
                        },
                      },
                    }}
                  />

                  <TextField
                    select
                    label="What type of event"
                    variant="outlined"
                    fullWidth
                    value={form.eventType}
                    onChange={(e) => handleChange('eventType', e.target.value)}
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />

                  <TextField
                    label="Number of Guests"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={form.guestCount}
                    onChange={(e) => handleChange('guestCount', e.target.value)}
                    disabled={isSubmitting}
                  />

                  <TextField
                    select
                    label="Which Booth"
                    variant="outlined"
                    fullWidth
                    value={form.boothType}
                    onChange={(e) => handleChange('boothType', e.target.value)}
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />

                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    error={
                      Boolean(errors.message) ||
                      form.message.length > maxMessageLength
                    }
                    helperText={
                      errors.message ||
                      (form.message.length > maxMessageLength
                        ? `Message is too long (${form.message.length}/${maxMessageLength})`
                        : `${form.message.length}/${maxMessageLength} characters`)
                    }
                    disabled={isSubmitting}
                    InputProps={{
                      endAdornment: validFields.message && (
                        <CheckCircle
                          sx={{
                            color: '#10B981',
                            alignSelf: 'flex-start',
                            mt: 1,
                          }}
                        />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                          borderColor: '#004aad',
                          boxShadow: '0 0 0 3px rgba(0, 74, 173, 0.1)',
                        },
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      mt: 2,
                      background:
                        'linear-gradient(135deg, #004aad 0%, #0056c9 100%)',
                      color: '#fff',
                      borderRadius: '9999px',
                      px: 4,
                      py: 1.5,
                      fontWeight: 'bold',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 74, 173, 0.3)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background:
                          'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                        transition: 'left 0.5s ease',
                      },
                      '&:hover:not(:disabled)': {
                        background:
                          'linear-gradient(135deg, #0056c9 0%, #004aad 100%)',
                        transform: 'scale(1.05) translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0, 74, 173, 0.4)',
                      },
                      '&:hover:not(:disabled)::before': {
                        left: '100%',
                      },
                      '&:disabled': {
                        background:
                          'linear-gradient(135deg, #ccc 0%, #999 100%)',
                        color: '#fff',
                      },
                    }}
                    startIcon={
                      isSubmitting ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : null
                    }
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </Paper>
            </MotionBox>
          </Grid2>

          {/* Contact Info Cards */}
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Email Card */}
              <MotionCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                sx={{
                  borderRadius: 3,
                  background:
                    'linear-gradient(135deg, rgba(235, 206, 181, 0.3) 0%, rgba(217, 184, 159, 0.3) 100%)',
                  border: '2px solid #ebceb5',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(235, 206, 181, 0.4)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: '#ebceb5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <FaEnvelope
                        style={{ fontSize: '1.5rem', color: '#004aad' }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: '#333' }}
                    >
                      Email Us
                    </Typography>
                  </Box>
                  <MuiLink
                    href={`mailto:${contactInfo.email}`}
                    sx={{
                      color: '#004aad',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1rem',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {contactInfo.email}
                  </MuiLink>
                  <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
                    We&apos;ll respond within 24 hours
                  </Typography>
                </CardContent>
              </MotionCard>

              {/* Phone Card */}
              <MotionCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                sx={{
                  borderRadius: 3,
                  background:
                    'linear-gradient(135deg, rgba(0, 74, 173, 0.1) 0%, rgba(235, 206, 181, 0.2) 100%)',
                  border: '2px solid #004aad',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 74, 173, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: '#004aad',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <FaPhone style={{ fontSize: '1.5rem', color: '#fff' }} />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: '#333' }}
                    >
                      Call Us
                    </Typography>
                  </Box>
                  <MuiLink
                    href={`tel:${contactInfo.phone}`}
                    sx={{
                      color: '#004aad',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {contactInfo.phone}
                  </MuiLink>
                </CardContent>
              </MotionCard>

              {/* Location Card */}
              <MotionCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                sx={{
                  borderRadius: 3,
                  background:
                    'linear-gradient(135deg, rgba(235, 206, 181, 0.2) 0%, rgba(0, 74, 173, 0.05) 100%)',
                  border: '2px solid #ebceb5',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(235, 206, 181, 0.3)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: '#ebceb5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      <FaMapMarkerAlt
                        style={{ fontSize: '1.5rem', color: '#004aad' }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: '#333' }}
                    >
                      Service Area
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, color: '#333' }}
                  >
                    DMV Area
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.5, color: '#666' }}>
                    Washington DC, Maryland & Virginia
                  </Typography>
                </CardContent>
              </MotionCard>

              {/* Social Media Card */}
              <MotionCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                sx={{
                  borderRadius: 3,
                  background:
                    'linear-gradient(135deg, #ebceb5 0%, #d9b89f 100%)',
                  border: '2px solid rgba(0, 74, 173, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(235, 206, 181, 0.5)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mb: 2, color: '#333' }}
                  >
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <MuiLink
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: '#004aad',
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#003580',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <FaInstagram size={24} />
                    </MuiLink>
                    <MuiLink
                      href={contactInfo.tiktok}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        backgroundColor: '#004aad',
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#003580',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <FaTiktok size={24} />
                    </MuiLink>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
                    Check out our latest events and behind-the-scenes content!
                  </Typography>
                </CardContent>
              </MotionCard>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
