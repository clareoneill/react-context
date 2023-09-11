import Typography from '@mui/material/Typography';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppProvider } from '../../context/AppContext';
import Dashboard from '../Dashboard';
import Favorites from '../Favorites';
import Home from '../Home';
import Navigation from '../Navigation';
import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <Typography component="h1" variant="h2">
          Code42 Movie App
        </Typography>
      </header>
      <main>
        <AppProvider>
          <Home>
            <Routes>
              <Route exact path="*" element={<Dashboard />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Home>
        </AppProvider>
      </main>
      <nav className="nav">
        <Navigation />
      </nav>
    </>
  );
}

export default App;
