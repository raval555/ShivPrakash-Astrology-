import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'contact.address.title',
      content: 'contact.address.content',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'contact.phone.title',
      content: 'contact.phone.content',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'contact.email.title',
      content: 'contact.email.content',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'contact.hours.title',
      content: 'contact.hours.content',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontFamily: 'Playfair Display', color: theme.palette.primary.main }}
        >
          {t('contact.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {t('contact.subtitle')}
        </Typography>
      </Box>

      {/* Contact Information */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>{info.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {t(info.title)}
                </Typography>
                <Typography color="text.secondary">
                  {t(info.content)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Form */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display' }}>
                {t('contact.form.title')}
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('contact.form.name')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('contact.form.email')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('contact.form.phone')}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label={t('contact.form.message')}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      {t('contact.form.submit')}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Map Section */}
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display' }}>
                {t('contact.map.title')}
              </Typography>
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803899692574!2d72.86752661489991!3d19.0481299870726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d27b%3A0x4c2b4fb0d578c58c!2sChunabhatti%2C%20Mumbai%2C%20Maharashtra%20400022!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                sx={{
                  border: 0,
                  width: '100%',
                  height: '400px',
                  borderRadius: 1,
                }}
                allowFullScreen=""
                loading="lazy"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
