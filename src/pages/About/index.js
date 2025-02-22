import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const achievements = [
    'experience',
    'clients',
    'accuracy',
    'satisfaction',
  ];

  const specializations = [
    'vedic',
    'numerology',
    'gemology',
    'vastu',
    'palmistry',
    'matchMaking',
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
          {t('about.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {t('about.subtitle')}
        </Typography>
      </Box>

      {/* Profile Section */}
      <Card sx={{ mb: 8 }}>
        <CardContent>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  src="/path-to-astrologer-image.jpg"
                  alt="Astrologer"
                  sx={{ width: 240, height: 240 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display' }}>
                {t('about.astrologer.name')}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                {t('about.astrologer.title')}
              </Typography>
              <Typography paragraph>
                {t('about.astrologer.description')}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Achievements Section */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {achievements.map((achievement) => (
          <Grid item xs={12} sm={6} md={3} key={achievement}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  {t(`about.achievements.${achievement}.number`)}
                </Typography>
                <Typography variant="h6">
                  {t(`about.achievements.${achievement}.title`)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Specializations Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: 'center', fontFamily: 'Playfair Display' }}
        >
          {t('about.specializations.title')}
        </Typography>
        <Grid container spacing={4}>
          {specializations.map((specialization) => (
            <Grid item xs={12} sm={6} md={4} key={specialization}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontFamily: 'Playfair Display' }}
                  >
                    {t(`about.specializations.${specialization}.title`)}
                  </Typography>
                  <Typography>
                    {t(`about.specializations.${specialization}.description`)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Vision & Mission */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontFamily: 'Playfair Display' }}
              >
                {t('about.vision.title')}
              </Typography>
              <Typography paragraph>
                {t('about.vision.description')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontFamily: 'Playfair Display' }}
              >
                {t('about.mission.title')}
              </Typography>
              <Typography paragraph>
                {t('about.mission.description')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
