import React from 'react';
import { cn } from '@/shared/lib/styles/cn';

interface SkillBadgProps {
  renderIcon: (width: number, height: number) => React.ReactNode;
  title: string;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgProps> = ({ className, renderIcon, title }) => (
  <div
    className={cn(
      'inline-flex w-[112px] flex-col items-center justify-between gap-y-2 rounded-md border border-white px-4 py-2 text-white transition-transform hover:scale-110',
      className
    )}
  >
    <span className='flex items-center justify-center'>{renderIcon(48, 48)}</span>
    <h4 className='text-center text-lg font-semibold'>{title}</h4>
  </div>
);
export default SkillBadge;
