import React from 'react';

interface StrongProps {
    children: React.ReactNode;
    variant?: 'fillBack' | 'underLine';
}

const strongVariants = {
    fillBack:
        'bg-secondary px-1 font-semibold text-white transition-colors duration-150 hover:bg-accent hover:text-main',
    underLine: 'font-semibold text-secondary underline',
};

const Strong: React.FC<StrongProps> = ({ children, variant = 'fillBack' }) => {
    return <strong className={strongVariants[variant]}>{children}</strong>;
};

export default Strong;
