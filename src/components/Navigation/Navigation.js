import AppsIcon from '@mui/icons-material/Apps';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const NAV_INDICIES = ['/', '/favorites'];

function Navigation() {
  const { pathname } = useLocation();

  const selectedIndex = NAV_INDICIES.indexOf(pathname);

  return (
    <BottomNavigation className="navigation" value={selectedIndex} showLabels>
      <BottomNavigationAction label="All" icon={<AppsIcon />} component={RouterLink} to="/" />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        component={RouterLink}
        to="/favorites"
      />
    </BottomNavigation>
  );
}

export default Navigation;
