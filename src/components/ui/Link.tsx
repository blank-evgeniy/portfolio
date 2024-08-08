import { motion } from 'framer-motion';
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

interface LinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof link> {}

const link = cva('text-gray-300 transition-colors duration-500 ease-out', {
    variants: {
        variant: {
            secondary: 'hover:text-secondary',
            accent: 'hover:text-accent',
        },
    },
    defaultVariants: {
        variant: 'secondary',
    },
});

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <a
                ref={ref}
                className={link({ variant, className })}
                {...props}
            ></a>
        );
    }
);

export const MotionLink = motion(Link);

export default Link;
