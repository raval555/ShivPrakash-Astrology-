import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from '../pages/Home';
import HoroscopePage from '../pages/Horoscope';
import MatchMakingPage from '../pages/MatchMaking';
import GemstonesPage from '../pages/Gemstones';
import NumerologyPage from '../pages/Numerology';
import AppointmentsPage from '../pages/Appointments';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import PrivacyPage from '../pages/Privacy';
import TermsPage from '../pages/Terms';
import NotFoundPage from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/horoscope" element={<HoroscopePage />} />
      <Route path="/match-making" element={<MatchMakingPage />} />
      <Route path="/gemstones" element={<GemstonesPage />} />
      <Route path="/numerology" element={<NumerologyPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
