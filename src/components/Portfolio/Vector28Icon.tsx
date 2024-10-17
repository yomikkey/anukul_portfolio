import { memo, SVGProps } from 'react';

const Vector28Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 119 301' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.5 0C44.1667 47.5 125.2 192.5 118 300.5' stroke='url(#paint0_linear_104_243)' />
    <defs>
      <linearGradient
        id='paint0_linear_104_243'
        x1={64.2522}
        y1={25}
        x2={64.2522}
        y2={300.5}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#3D1768' />
        <stop offset={1} stopColor='#3D1768' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector28Icon);
export { Memo as Vector28Icon };
