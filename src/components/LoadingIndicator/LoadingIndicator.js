import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import './LoadingIndicator.css';

export default function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <CircularProgress />
    </div>
  );
}
