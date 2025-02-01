import React from 'react';
import { motion } from 'framer-motion';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../lib/styles/cn';

const linkVariants = cva('transition-colors duration-500 ease-out', {
  variants: {
    variant: {
      secondary: 'hover:text-secondary text-gray-300',
      accent: 'hover:text-accent text-gray-300',
      button:
        'rounded-sm border px-8 py-3 text-white text-lg hover:border-secondary hover:bg-secondary font-semibold',
      buttonAccent:
        'rounded-sm border px-8 py-3 text-white text-lg hover:border-accent hover:bg-accent hover:text-black font-semibold',
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
});

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, ...props }, ref) => {
    return <a ref={ref} className={cn(linkVariants({ variant, className }))} {...props}></a>;
  }
);
Link.displayName = 'Link';

export const MotionLink = motion(Link);

export default Link;
