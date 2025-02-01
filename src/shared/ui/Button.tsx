import React from 'react';
import { motion } from 'framer-motion';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../lib/styles/cn';

const buttonVariants = cva('rounded-sm border transition-colors duration-500 ease-out', {
  variants: {
    size: {
      sm: 'px-8 py-3 text-lg',
      md: 'px-10 py-4 text-xl',
    },
    variant: {
      secondary: 'hover:border-secondary hover:bg-secondary',
      accent: 'hover:border-accent hover:bg-accent',
      secondary_dark: 'hover:border-secondary hover:bg-secondary border-main',
      accent_dark: 'hover:border-accent hover:bg-accent border-main',
    },
  },

  defaultVariants: {
    size: 'sm',
    variant: 'secondary',
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, size, variant, children, ...props },
  ref
) {
  return (
    <button ref={ref} className={cn(buttonVariants({ size, variant, className }))} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export const MotionButton = motion(Button);

export default Button;
