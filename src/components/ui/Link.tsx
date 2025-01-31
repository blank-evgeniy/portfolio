import { motion } from 'framer-motion';
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof link> {}

const link = cva('transition-colors duration-500 ease-out', {
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

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, ...props }, ref) => {
    return <a ref={ref} className={link({ variant, className })} {...props}></a>;
  }
);
Link.displayName = 'Link';

export const MotionLink = motion(Link);

export default Link;
