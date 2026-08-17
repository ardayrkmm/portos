import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  const baseStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
  };
  const primaryStyle = { ...baseStyle, backgroundColor: '#007bff', color: 'white' };
  const secondaryStyle = { ...baseStyle, backgroundColor: '#6c757d', color: 'white' };

  return (
    <button style={variant === 'primary' ? primaryStyle : secondaryStyle} {...props}>
      {children}
    </button>
  );
};
