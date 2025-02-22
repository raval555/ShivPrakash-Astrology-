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
  Stepper,
  Step,
  StepLabel,
  useTheme,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useTranslation } from 'react-i18next';

const steps = ['bride.details', 'groom.details', 'result'];

const MatchMakingPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [brideDetails, setBrideDetails] = useState({
    name: '',
    birthDate: null,
    birthPlace: '',
    gotra: '',
  });
  const [groomDetails, setGroomDetails] = useState({
    name: '',
    birthDate: null,
    birthPlace: '',
    gotra: '',
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('matchMaking.form.brideName')}
                value={brideDetails.name}
                onChange={(e) =>
                  setBrideDetails({ ...brideDetails, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <DateTimePicker
                label={t('matchMaking.form.brideBirthDate')}
                value={brideDetails.birthDate}
                onChange={(newValue) =>
                  setBrideDetails({ ...brideDetails, birthDate: newValue })
                }
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('matchMaking.form.brideBirthPlace')}
                value={brideDetails.birthPlace}
                onChange={(e) =>
                  setBrideDetails({ ...brideDetails, birthPlace: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('matchMaking.form.brideGotra')}
                value={brideDetails.gotra}
                onChange={(e) =>
                  setBrideDetails({ ...brideDetails, gotra: e.target.value })
                }
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('matchMaking.form.groomName')}
                value={groomDetails.name}
                onChange={(e) =>
                  setGroomDetails({ ...groomDetails, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <DateTimePicker
                label={t('matchMaking.form.groomBirthDate')}
                value={groomDetails.birthDate}
                onChange={(newValue) =>
                  setGroomDetails({ ...groomDetails, birthDate: newValue })
                }
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('matchMaking.form.groomBirthPlace')}
                value={groomDetails.birthPlace}
                onChange={(e) =>
                  setGroomDetails({ ...groomDetails, birthPlace: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('matchMaking.form.groomGotra')}
                value={groomDetails.gotra}
                onChange={(e) =>
                  setGroomDetails({ ...groomDetails, gotra: e.target.value })
                }
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              {t('matchMaking.result.title')}
            </Typography>
            <Typography paragraph>
              {t('matchMaking.result.processing')}
            </Typography>
          </Box>
        );
      default:
        return null;
    }
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
          {t('matchMaking.title')}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {t('matchMaking.subtitle')}
        </Typography>
      </Box>

      {/* Stepper */}
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{t(`matchMaking.steps.${label}`)}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Form */}
      <Card>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit}>
            {renderStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  {t('matchMaking.form.back')}
                </Button>
              )}
              <Button
                variant="contained"
                type={activeStep === steps.length - 1 ? 'button' : 'submit'}
              >
                {activeStep === steps.length - 1
                  ? t('matchMaking.form.finish')
                  : t('matchMaking.form.next')}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MatchMakingPage;
