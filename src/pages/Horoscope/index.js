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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useTranslation } from 'react-i18next';

const HoroscopePage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [birthDate, setBirthDate] = useState(null);
  const [birthPlace, setBirthPlace] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ birthDate, birthPlace, gender });
  };

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
          {t('horoscope.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {t('horoscope.subtitle')}
        </Typography>
      </Box>

      {/* Birth Details Form */}
      <Card sx={{ mb: 8 }}>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <DateTimePicker
                  label={t('horoscope.form.birthDate')}
                  value={birthDate}
                  onChange={(newValue) => setBirthDate(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label={t('horoscope.form.birthPlace')}
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>{t('horoscope.form.gender')}</InputLabel>
                  <Select
                    value={gender}
                    label={t('horoscope.form.gender')}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem value="male">{t('horoscope.form.male')}</MenuItem>
                    <MenuItem value="female">{t('horoscope.form.female')}</MenuItem>
                    <MenuItem value="other">{t('horoscope.form.other')}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  {t('horoscope.form.submit')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* Features Section */}
      <Grid container spacing={4}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} md={4} key={item}>
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
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ fontFamily: 'Playfair Display' }}
                >
                  {t(`horoscope.features.${item}.title`)}
                </Typography>
                <Typography>
                  {t(`horoscope.features.${item}.description`)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HoroscopePage;
