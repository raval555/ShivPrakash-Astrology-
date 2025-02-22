import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const gemstones = [
  {
    id: 'ruby',
    planet: 'Sun',
    benefits: ['confidence', 'leadership', 'vitality'],
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 'pearl',
    planet: 'Moon',
    benefits: ['peace', 'emotional_balance', 'intuition'],
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 'emerald',
    planet: 'Mercury',
    benefits: ['communication', 'intelligence', 'success'],
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 'diamond',
    planet: 'Venus',
    benefits: ['love', 'luxury', 'creativity'],
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 'coral',
    planet: 'Mars',
    benefits: ['courage', 'strength', 'protection'],
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 'yellow_sapphire',
    planet: 'Jupiter',
    benefits: ['wisdom', 'wealth', 'spirituality'],
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 'blue_sapphire',
    planet: 'Saturn',
    benefits: ['discipline', 'responsibility', 'longevity'],
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 'hessonite',
    planet: 'Rahu',
    benefits: ['mysticism', 'innovation', 'transformation'],
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 'cats_eye',
    planet: 'Ketu',
    benefits: ['spirituality', 'psychic_abilities', 'liberation'],
    image: 'https://via.placeholder.com/300x200',
  },
];

const GemstonesPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();

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
          {t('gemstones.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {t('gemstones.subtitle')}
        </Typography>
      </Box>

      {/* Gemstones Grid */}
      <Grid container spacing={4}>
        {gemstones.map((gemstone) => (
          <Grid item key={gemstone.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={gemstone.image}
                alt={t(`gemstones.items.${gemstone.id}.name`)}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ fontFamily: 'Playfair Display' }}
                >
                  {t(`gemstones.items.${gemstone.id}.name`)}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  {t('gemstones.planet')}: {t(`planets.${gemstone.planet}`)}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {t('gemstones.benefits')}:
                </Typography>
                <ul>
                  {gemstone.benefits.map((benefit) => (
                    <li key={benefit}>
                      <Typography>
                        {t(`gemstones.benefits.${benefit}`)}
                      </Typography>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => {
                    // Handle consultation booking
                  }}
                >
                  {t('gemstones.consultButton')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Consultation Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          {t('gemstones.consultation.title')}
        </Typography>
        <Typography variant="h6" paragraph>
          {t('gemstones.consultation.description')}
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            // Handle consultation booking
          }}
        >
          {t('gemstones.consultation.button')}
        </Button>
      </Box>
    </Container>
  );
};

export default GemstonesPage;
