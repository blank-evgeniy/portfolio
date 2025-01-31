import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  className: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        'mt-8 flex h-16 items-center justify-between rounded-xl border-2 border-white p-4 text-xl font-semibold sm:h-28 lg:text-3xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
