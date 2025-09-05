
import React from 'react';
import { GoChevronRight } from 'react-icons/go';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'blue' | 'neutral' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  iconPosition?: 'left' | 'right' | 'none';
  iconOnly?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  iconPosition = 'none',
  iconOnly = false,
  children,
  className = '',
  onClick,
  ...props
}) => {
  // Base styles
  const baseStyles = 'flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Size variants
  const sizeStyles = {
    sm: iconOnly ? 'rounded-full' : 'sm:px-4 px-2 sm:py-2 py-1 text-sm rounded-full',
    md: iconOnly ? 'rounded-full' : 'sm:px-6 px-4 sm:py-3 py-2 text-base rounded-full',
    lg: iconOnly ? 'rounded-full' : 'sm:px-8 px-6 sm:py-4 py-3 text-lg rounded-full'
  };

  // Color variants
  const colorStyles = {
    primary: 'bg-primary-dark-blue hover:bg-opacity-90 focus:ring-primary-dark-blue',
    secondary: 'bg-accent-blue text-white hover:bg-opacity-90 focus:ring-accent-blue',
    dark: 'bg-neutral-100 text-white hover:bg-neutral-80 focus:ring-neutral-100',
    blue: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    neutral: 'bg-neutral-30 text-neutral-80 hover:bg-neutral-40 focus:ring-neutral-30',
    outline: 'bg-transparent text-primary-dark-blue border-2 border-primary-dark-blue hover:bg-primary-dark-blue hover:text-white focus:ring-primary-dark-blue'
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${colorStyles[variant]} ${className}`;

  const renderIcon = () => {
    if (iconOnly || iconPosition !== 'none') {
      return <GoChevronRight size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />;
    }
    return null;
  };

  return (
    <button className={combinedClassName} {...props} onClick={onClick}>
      {iconPosition === 'left' && renderIcon()}
      {!iconOnly && (
        <span className={iconPosition === 'left' ? 'ml-2' : iconPosition === 'right' ? 'mr-2' : ''}>
          {children}
        </span>
      )}
      {iconPosition === 'right' && renderIcon()}
      {iconOnly && renderIcon()}
    </button>
  );
};

export default Button;