import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const PrivacyPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const sections = [
    'introduction',
    'information',
    'usage',
    'sharing',
    'security',
    'cookies',
    'thirdParty',
    'children',
    'changes',
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
          {t('privacy.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {t('privacy.subtitle')}
        </Typography>
      </Box>

      {/* Last Updated */}
      <Typography
        variant="subtitle1"
        color="text.secondary"
        paragraph
        sx={{ textAlign: 'center', mb: 6 }}
      >
        {t('privacy.lastUpdated', { date: 'May 1, 2023' })}
      </Typography>

      {/* Privacy Policy Sections */}
      <Paper elevation={3} sx={{ p: 4 }}>
        {sections.map((section) => (
          <Box key={section} sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontFamily: 'Playfair Display', color: theme.palette.primary.main }}
            >
              {t(`privacy.sections.${section}.title`)}
            </Typography>
            <Typography paragraph>
              {t(`privacy.sections.${section}.content`)}
            </Typography>
            {section === 'information' && (
              <Box component="ul" sx={{ pl: 4 }}>
                {['personal', 'usage', 'technical'].map((type) => (
                  <Box component="li" key={type} sx={{ mb: 1 }}>
                    <Typography>
                      {t(`privacy.sections.information.types.${type}`)}
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
            {t('privacy.contact.title')}
          </Typography>
          <Typography paragraph>
            {t('privacy.contact.content')}
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

export default PrivacyPage;
