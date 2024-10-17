import { memo, SVGProps } from 'react';

const Vector27Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 292' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M35 0C15.9999 66 0.500002 237.5 0.5 291.5' stroke='url(#paint0_linear_104_242)' />
    <defs>
      <linearGradient id='paint0_linear_104_242' x1={9.75} y1={17} x2={9.75} y2={288} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#3D1768' />
        <stop offset={1} stopColor='#3D1768' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector27Icon);
export { Memo as Vector27Icon };
