import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const services = [
  {
    title: 'home.horoscope.title',
    description: 'home.horoscope.description',
    path: '/horoscope',
  },
  {
    title: 'home.matchMaking.title',
    description: 'home.matchMaking.description',
    path: '/match-making',
  },
  {
    title: 'home.gemstones.title',
    description: 'home.gemstones.description',
    path: '/gemstones',
  },
  {
    title: 'home.numerology.title',
    description: 'home.numerology.description',
    path: '/numerology',
  },
];

const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: 'Playfair Display',
              color: theme.palette.primary.main,
            }}
          >
            {t('home.hero.title')}
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            {t('home.hero.subtitle')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/appointments')}
            sx={{ mt: 4 }}
          >
            {t('home.hero.cta')}
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item key={service.path} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontFamily: 'Playfair Display' }}
                  >
                    {t(service.title)}
                  </Typography>
                  <Typography>{t(service.description)}</Typography>
                  <Button
                    size="small"
                    onClick={() => navigate(service.path)}
                    sx={{ mt: 2 }}
                  >
                    {t('home.learnMore')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontFamily: 'Playfair Display',
              color: theme.palette.primary.main,
            }}
          >
            {t('home.contact.title')}
          </Typography>
          <Typography variant="h6" paragraph>
            {t('home.contact.subtitle')}
          </Typography>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/contact')}
          >
            {t('home.contact.cta')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
