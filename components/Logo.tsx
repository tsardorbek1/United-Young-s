import React from 'react';

interface LogoProps {
  className?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', textColor = 'text-slate-900' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
        <svg
            className="h-full w-auto text-[#2AC1FF]"
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M63.5,22.5C63.5,22.5,63.5,22.5,63.5,22.5c-4.4-3-9.5-4.5-14.8-4.5c-5.4,0-10.5,1.5-15,4.5c-0.1,0.1-0.2,0.1-0.2,0.2 C25.8,28.8,19.3,39,19.3,50.7c0,16.8,13.6,30.4,30.4,30.4s30.4-13.6,30.4-30.4C80.1,39,73.6,28.8,63.8,22.7 C63.7,22.6,63.6,22.5,63.5,22.5z M49.7,75.4c-13.6,0-24.7-11.1-24.7-24.7c0-9.8,5.7-18.4,14.1-22.3c3.5,3.3,7.9,5.2,12.7,5.2 c3.4,0,6.5-1,9.2-2.7c-1.3,4-2,8.3-2,12.8C63.6,58.3,57.7,69,49.7,75.4z"
            />
            <path
                d="M58.3,24.3c-2.8,1.6-6,2.5-9.6,2.5c-5.1,0-9.8-2.2-13-5.8C40.6,18.4,45,17,49.7,17c4.8,0,9.2,1.4,12.9,3.9 c-1.3,1-2.6,2.1-3.9,3.2C58.6,24.2,58.4,24.2,58.3,24.3z"
            />
        </svg>
        <span className={`font-extrabold text-2xl ${textColor}`}>United Youngs</span>
    </div>
  );
};

export default Logo;