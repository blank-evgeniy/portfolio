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
            button: 'rounded-sm border px-8 py-3 text-lg hover:border-secondary hover:bg-secondary font-semibold',
            buttonAccent:
                'rounded-sm border px-8 py-3 text-lg hover:border-accent hover:bg-accent hover:text-black font-semibold',
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
