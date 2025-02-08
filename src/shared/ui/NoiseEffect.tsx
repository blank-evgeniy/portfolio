import React from 'react';
import { cn } from '@/shared/lib/styles/cn';

interface NoiseEffectProps {
  className?: string;
}

const NoiseEffect: React.FC<NoiseEffectProps> = ({ className }) => (
  <div
    className={cn('pointer-events-none absolute inset-0 z-50 opacity-20', className)}
    style={{ backgroundImage: "url('./noise.png')" }}
  />
);
export default NoiseEffect;
