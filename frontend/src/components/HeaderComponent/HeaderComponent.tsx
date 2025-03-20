import React from 'react';
import './style.css';  // Použijeme vlastní styly, pokud je máš

interface HeaderProps {
  text: string;  // Text, který bude zobrazen v nadpisu
}

const HeaderComponent: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div className="header">
      {text}
    </div>
  );
};

export default HeaderComponent;
