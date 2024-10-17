import { memo, SVGProps } from 'react';

const BackgroundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1990 4298' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1990V4298H0V0Z' fill='#11071F' />
  </svg>
);

const Memo = memo(BackgroundIcon);
export { Memo as BackgroundIcon };
