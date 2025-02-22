import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const TermsPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const sections = [
    'acceptance',
    'services',
    'eligibility',
    'account',
    'payment',
    'cancellation',
    'conduct',
    'intellectual',
    'disclaimer',
    'limitation',
    'indemnification',
    'changes',
    'governing',
    'contact',
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
          {t('terms.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {t('terms.subtitle')}
        </Typography>
      </Box>

      {/* Last Updated */}
      <Typography
        variant="subtitle1"
        color="text.secondary"
        paragraph
        sx={{ textAlign: 'center', mb: 6 }}
      >
        {t('terms.lastUpdated', { date: 'May 1, 2023' })}
      </Typography>

      {/* Terms Sections */}
      <Paper elevation={3} sx={{ p: 4 }}>
        {sections.map((section) => (
          <Box key={section} sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontFamily: 'Playfair Display', color: theme.palette.primary.main }}
            >
              {t(`terms.sections.${section}.title`)}
            </Typography>
            <Typography paragraph>
              {t(`terms.sections.${section}.content`)}
            </Typography>
            {section === 'services' && (
              <Box component="ul" sx={{ pl: 4 }}>
                {['horoscope', 'matchMaking', 'gemstones', 'numerology'].map((service) => (
                  <Box component="li" key={service} sx={{ mb: 1 }}>
                    <Typography>
                      {t(`terms.sections.services.types.${service}`)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}

        {/* Contact Information */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" gutterBottom>
            {t('terms.contact.title')}
          </Typography>
          <Typography paragraph>
            {t('terms.contact.content')}
          </Typography>
          <Typography>
            Email: prakashkumarraval74@gmail.com
          </Typography>
          <Typography>
            Phone: +91 7977339989
          </Typography>
          <Typography>
            Address: Shop no-3, Shivdarshini Society, Opposite to Muktadevi Temple,
            Hill Road, Chunabhatti, Mumbai, Maharashtra, 400022
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsPage;
