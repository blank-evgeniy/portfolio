import React from 'react';

interface LinkProps {
    children: React.ReactNode;
}

const Button: React.FC<LinkProps> = ({ children }) => {
    return (
        <button className="hover:bg-secondary hover:border-secondary rounded-sm border-2 px-8 py-3 text-lg transition-colors duration-500 ease-out">
            {children}
        </button>
    );
};

export default Button;
