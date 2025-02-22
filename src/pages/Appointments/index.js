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
import { useDispatch } from 'react-redux';
import { addAppointment } from '../../store/slices/appointmentSlice';

const consultationTypes = [
  'horoscope',
  'matchMaking',
  'gemstones',
  'numerology',
  'general',
];

const AppointmentsPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    preferredDate: null,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (newValue) => {
    setFormData((prev) => ({
      ...prev,
      preferredDate: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAppointment(formData));
    // Reset form or show success message
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
          {t('appointments.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {t('appointments.subtitle')}
        </Typography>
      </Box>

      {/* Appointment Form */}
      <Card>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label={t('appointments.form.name')}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label={t('appointments.form.email')}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label={t('appointments.form.phone')}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel>{t('appointments.form.consultationType')}</InputLabel>
                  <Select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    label={t('appointments.form.consultationType')}
                  >
                    {consultationTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {t(`appointments.consultationTypes.${type}`)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <DateTimePicker
                  label={t('appointments.form.preferredDate')}
                  value={formData.preferredDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} fullWidth required />}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label={t('appointments.form.message')}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  {t('appointments.form.submit')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* Information Section */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t('appointments.info.timing.title')}
              </Typography>
              <Typography>
                {t('appointments.info.timing.content')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t('appointments.info.preparation.title')}
              </Typography>
              <Typography>
                {t('appointments.info.preparation.content')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {t('appointments.info.fees.title')}
              </Typography>
              <Typography>
                {t('appointments.info.fees.content')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentsPage;
