import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent' | 'gold';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-700 border border-gray-200',
    primary: 'bg-primary-100 text-primary-700 border border-primary-200',
    accent: 'bg-accent-100 text-accent-700 border border-accent-200',
    gold: 'bg-gold-100 text-gold-700 border border-gold-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
