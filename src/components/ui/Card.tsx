import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  glass = false,
}) => {
  const baseStyles = 'rounded-xl p-6';
  const glassStyles = glass ? 'glass-card' : 'bg-white shadow-lg border border-gray-100';
  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : '';

  return (
    <div className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
