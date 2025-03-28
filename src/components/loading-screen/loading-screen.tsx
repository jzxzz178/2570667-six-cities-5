import React from 'react';
import '../../../markup/css/loading-screen.css';

const LoadingScreen: React.FC = () => (
  <div className="spinner">
    <div className="spinner__circle"></div>
    <p className="spinner__text">Loading...</p>
  </div>
);

export default LoadingScreen;
