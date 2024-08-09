import { motion } from 'framer-motion';
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

const button = cva(
    'rounded-sm border transition-colors duration-500 ease-out',
    {
        variants: {
            size: {
                default: 'px-8 py-3 text-lg',
                md: 'px-10 py-4 text-xl',
            },
            variant: {
                secondary: 'hover:border-secondary hover:bg-secondary',
                accent: 'hover:border-accent hover:bg-accent',
                secondary_dark:
                    'hover:border-secondary hover:bg-secondary border-main',
                accent_dark: 'hover:border-accent hover:bg-accent border-main',
            },
        },

        defaultVariants: {
            size: 'default',
            variant: 'secondary',
        },
    }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={button({ size, variant, className })}
                {...props}
            ></button>
        );
    }
);

export const MotionButton = motion(Button);

export default Button;
