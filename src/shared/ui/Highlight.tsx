import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../lib/styles/cn';

const highlightVariants = cva('font-semibold', {
  variants: {
    variant: {
      default:
        'bg-secondary px-1 text-white transition-colors duration-150 hover:bg-accent hover:text-main',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

interface HighlightProps extends VariantProps<typeof highlightVariants> {
  children: React.ReactNode;
  className?: string;
}

const Highlight: React.FC<HighlightProps> = ({ children, variant, className }) => {
  return <strong className={cn(highlightVariants({ variant, className }))}>{children}</strong>;
};

export default Highlight;
