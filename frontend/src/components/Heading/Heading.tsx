import React from 'react';
import './style.css'; // Předpokládám, že budete mít nějaký CSS soubor pro styling

interface Heading {
  text: string;
}

const Heading: React.FC<Heading> = ({ text }) => {
  return <h1 className="heading">{text}</h1>;
};

export default Heading;
