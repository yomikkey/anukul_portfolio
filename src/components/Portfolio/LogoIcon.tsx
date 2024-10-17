import { memo, SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H35' stroke='white' strokeWidth={4} />
    <path d='M0 38.5517H35' stroke='white' strokeWidth={4} />
    <path d='M21.4375 0L7 18.8276L21.4375 39' stroke='white' strokeWidth={4} />
  </svg>
);

const Memo = memo(LogoIcon);
export { Memo as LogoIcon };
