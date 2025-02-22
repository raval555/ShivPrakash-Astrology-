import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from './components/Layout';
import Home from './pages/Home';
import Horoscope from './pages/Horoscope';
import MatchMaking from './pages/MatchMaking';
import Gemstones from './pages/Gemstones';
import Numerology from './pages/Numerology';
import Appointments from './pages/Appointments';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/match-making" element={<MatchMaking />} />
          <Route path="/gemstones" element={<Gemstones />} />
          <Route path="/numerology" element={<Numerology />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
