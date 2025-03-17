// ProgressBar.tsx
import React from 'react';
import './style.css';  // Importujeme styly

interface ProgressBarProps {
  image: string;         // Obrázek (URL obrázku)
  percentage: number;    // Procento plnosti (0-100)
  description: string;   // Popis (text o co se jedná)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ image, percentage, description }) => {
  return (
    <div className='wrapper'>
      <div className="progress-bar-container">
        <img src={image} alt="Progress Image" className="progress-bar-image" /> 
        <div className="content">
          <div className="header">
            <h3>{description}</h3>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${percentage}%` }} // Dynamicky nastaví šířku dle procenta
            >        <div className="percentage-text">
            {percentage}%
          </div></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
