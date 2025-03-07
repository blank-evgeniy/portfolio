import React from 'react';

export type DownArrowIconProps = React.ComponentProps<'svg'>;

export const DownArrowIcon = React.forwardRef<SVGSVGElement, DownArrowIconProps>((props, ref) => (
  <svg
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    {...props}
  >
    <path d='M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12V8H11V12H8L12 16L16 12H13Z'></path>
  </svg>
));
DownArrowIcon.displayName = 'DownArrowIcon';
