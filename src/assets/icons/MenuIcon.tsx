import React from 'react';

export type MenuIconProps = React.ComponentProps<'svg'>;

export const MenuIcon = React.forwardRef<SVGSVGElement, MenuIconProps>((props, ref) => (
  <svg
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 16 16'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
    />
  </svg>
));
MenuIcon.displayName = 'MenuIcon';
