import React from 'react';

interface LogoProps {
  showText?: boolean;
  textColor?: string;
  imgClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ showText = true, textColor = 'text-gray-400', imgClassName = 'h-14 w-auto' }) => (
  <div className="flex items-center space-x-2">
    <img src="/uy-logo.png" alt="United Youngs Logo" className={imgClassName} />
    {showText && <h4 className={`text-2xl font-bold ${textColor}`}>United Youngs</h4>}
  </div>
);

export default Logo;


