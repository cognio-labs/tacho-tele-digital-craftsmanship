import React from 'react';

interface LogoProps {
  className?: string;
  tColor?: string;
}

const Logo = ({ className = "h-12 w-12", tColor = "white" }: LogoProps) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Blue Circle */}
      <circle cx="50" cy="50" r="48" fill="#0056D2" />
      
      {/* Inner White Ring */}
      <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="6" fill="none" />
      
      {/* Center Blue Circle */}
      <circle cx="50" cy="50" r="32" fill="#0056D2" />
      
      {/* The 'T' Shape */}
      <path 
        d="M20 35H80V45H55V80H45V45H20V35Z" 
        fill={tColor} 
      />
    </svg>
  );
};

export default Logo;
