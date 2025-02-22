import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const pages = [
  { title: 'nav.home', path: '/' },
  { title: 'nav.horoscope', path: '/horoscope' },
  { title: 'nav.matchMaking', path: '/match-making' },
  { title: 'nav.gemstones', path: '/gemstones' },
  { title: 'nav.numerology', path: '/numerology' },
  { title: 'nav.appointments', path: '/appointments' },
  { title: 'nav.about', path: '/about' },
  { title: 'nav.contact', path: '/contact' },
];

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo/Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Playfair Display',
              color: theme.palette.primary.main,
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            Shiv Prakash Jyotish
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={() => handleNavigation(page.path)}
                >
                  <Typography textAlign="center">{t(page.title)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Playfair Display',
              color: theme.palette.primary.main,
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            Shiv Prakash Jyotish
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => handleNavigation(page.path)}
                sx={{
                  my: 2,
                  color: 'text.primary',
                  display: 'block',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {t(page.title)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
