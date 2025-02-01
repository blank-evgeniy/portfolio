import React from 'react';

interface HighlightProps {
  children: React.ReactNode;
  variant?: 'default';
}

const variants = {
  default:
    'bg-secondary px-1 font-semibold text-white transition-colors duration-150 hover:bg-accent hover:text-main',
};

const Highlight: React.FC<HighlightProps> = ({ children, variant = 'default' }) => {
  return <strong className={variants[variant]}>{children}</strong>;
};

export default Highlight;
