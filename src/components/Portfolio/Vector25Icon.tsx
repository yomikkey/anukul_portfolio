import { memo, SVGProps } from 'react';

const Vector25Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 123 278' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M123 0.5C79.3333 48 -6.2 170 1 278' stroke='url(#paint0_linear_104_240)' />
    <defs>
      <linearGradient
        id='paint0_linear_104_240'
        x1={61.7863}
        y1={0.5}
        x2={61.7863}
        y2={278}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#3D1768' />
        <stop offset={1} stopColor='#3D1768' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector25Icon);
export { Memo as Vector25Icon };
