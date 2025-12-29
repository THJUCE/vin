
import React from 'react';

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Circle/Octagon Border */}
      <path d="M50 5 L82 18 L95 50 L82 82 L50 95 L18 82 L5 50 L18 18 Z" stroke="currentColor" strokeWidth="2.5" />
      
      {/* Blades */}
      <path d="M50 5 L65 35 L50 35 Z" fill="currentColor" opacity="0.1" />
      <path d="M50 5 L82 18 L65 35 Z" stroke="currentColor" strokeWidth="2" />
      
      <path d="M82 18 L95 50 L75 55 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M95 50 L82 82 L65 65 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M82 82 L50 95 L45 70 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M50 95 L18 82 L35 65 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M18 82 L5 50 L25 45 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M5 50 L18 18 L35 35 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M18 18 L50 5 L55 30 Z" stroke="currentColor" strokeWidth="2" />
      
      {/* Central Aperture Hole Lines */}
      <path d="M65 35 L75 55 L65 65 L45 70 L35 65 L25 45 L35 35 L55 30 Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

export default LogoIcon;
