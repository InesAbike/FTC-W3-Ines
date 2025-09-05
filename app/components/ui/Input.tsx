
import React, { useState } from 'react';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { SlEye } from 'react-icons/sl';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showPasswordToggle?: boolean;
  variant?: 'default' | 'textarea';
  containerClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  showPasswordToggle = false,
  variant = 'default',
  containerClassName = '',
  className = '',
  type = 'text',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  React.useEffect(() => {
    if (showPasswordToggle && type === 'password') {
      setInputType(showPassword ? 'text' : 'password');
    }
  }, [showPassword, type, showPasswordToggle]);

  const baseInputStyles = `
    w-full px-3 py-2 border rounded-md transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
    placeholder:text-neutral-40 text-neutral-100
  `;

  const inputStyles = error 
    ? `${baseInputStyles} border-accent-red focus:ring-accent-red`
    : `${baseInputStyles} border-neutral-30 hover:border-neutral-40`;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const InputElement = variant === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={`space-y-1 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-80">
          {label}
        </label>
      )}
      
      <div className="relative">
        <InputElement
          type={variant === 'textarea' ? undefined : inputType}
          className={`${inputStyles} ${className} ${showPasswordToggle ? 'pr-10' : ''} ${variant === 'textarea' ? 'resize-none min-h-[80px]' : ''}`}
          {...(props as any)}
        />
        
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-40 hover:text-neutral-80 transition-colors"
          >
            {showPassword ? <HiOutlineEyeSlash size={18} /> : <SlEye  size={18} />}
          </button>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-accent-red flex items-center gap-1">
          <span className="w-1 h-1 bg-accent-red rounded-full"></span>
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="text-sm text-neutral-60">
          {helperText}
        </p>
      )}
    </div>
  );
};
export default Input;