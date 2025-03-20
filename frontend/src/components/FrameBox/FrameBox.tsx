import {ReactNode } from 'react';
import './style.css';

interface FrameBoxProps {
  children: ReactNode;
}


const FrameBox: React.FC<FrameBoxProps> = ({ children }) => {
  return <div className="editor">{children}</div>
};

export default FrameBox;

