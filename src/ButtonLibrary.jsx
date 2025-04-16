// File: ButtonLibrary.jsx

import React from 'react';
import './ButtonLibrary.css';

const ButtonLibrary = () => {
  return (
    <div className="wrapper">
      <div className="background">
        {[...Array(5)].map((_, i) => (
          <div className="particle" key={i}></div>
        ))}
      </div>

      <div className="content">
        <h1>GigFloww Button Component Library</h1>
        <div className="button-container">
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-disabled" disabled>Disabled Button</button>
        </div>
      </div>
    </div>
  );
};

export default ButtonLibrary;
