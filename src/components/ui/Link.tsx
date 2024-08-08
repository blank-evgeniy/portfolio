import React from 'react';

interface LinkProps {
    children: React.ReactNode;
    href?: string;
    color?: 'accent' | 'secondary';
    onClick?: () => void;
}

const LinkStyles = {
    accent: 'hover:text-accent',
    secondary: 'hover:text-secondary',
};

const Link: React.FC<LinkProps> = ({
    children,
    href = '#',
    onClick,
    color = 'secondary',
}) => {
    return (
        <a
            className={`${LinkStyles[color]} text-gray-300 transition-colors duration-500 ease-out`}
            href={href}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

export default Link;
