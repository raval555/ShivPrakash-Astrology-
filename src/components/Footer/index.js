import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  useTheme,
  Divider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const sections = [
    {
      title: 'footer.services',
      links: [
        { name: 'footer.horoscope', path: '/horoscope' },
        { name: 'footer.matchMaking', path: '/match-making' },
        { name: 'footer.gemstones', path: '/gemstones' },
        { name: 'footer.numerology', path: '/numerology' },
      ],
    },
    {
      title: 'footer.company',
      links: [
        { name: 'footer.about', path: '/about' },
        { name: 'footer.contact', path: '/contact' },
        { name: 'footer.privacy', path: '/privacy' },
        { name: 'footer.terms', path: '/terms' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: 'Playfair Display' }}
            >
              Shiv Prakash Jyotish Karayalay
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('footer.description')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              📞 +91 7977339989
            </Typography>
            <Typography variant="body2" color="text.secondary">
              📧 prakashkumarraval74@gmail.com
            </Typography>
          </Grid>

          {/* Links Sections */}
          {sections.map((section) => (
            <Grid item xs={6} md={2} key={section.title}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: 'Playfair Display' }}
              >
                {t(section.title)}
              </Typography>
              <Box>
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    component={RouterLink}
                    to={link.path}
                    color="inherit"
                    sx={{
                      display: 'block',
                      mb: 1,
                      textDecoration: 'none',
                      '&:hover': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {t(link.name)}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Address */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: 'Playfair Display' }}
            >
              {t('footer.address')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Shop no-3, Shivdarshini Society,
              <br />
              Opposite to Muktadevi Temple,
              <br />
              Hill Road, Chunabhatti,
              <br />
              Mumbai, Maharashtra, 400022
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 2 }}
        >
          © {new Date().getFullYear()} Shiv Prakash Jyotish Karayalay.{' '}
          {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
