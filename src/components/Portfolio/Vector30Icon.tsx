import { memo, SVGProps } from 'react';

const Vector30Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 313' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0C19.2534 72.3321 21 253.819 21 313' stroke='url(#paint0_linear_104_245)' />
    <defs>
      <linearGradient id='paint0_linear_104_245' x1={23} y1={26} x2={23} y2={323} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#3D1768' />
        <stop offset={1} stopColor='#3D1768' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector30Icon);
export { Memo as Vector30Icon };
