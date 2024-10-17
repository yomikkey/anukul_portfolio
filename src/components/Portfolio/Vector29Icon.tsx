import { memo, SVGProps } from 'react';

const Vector29Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 67 310' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0C43.6667 47.5 72.2003 202 65.0003 310' stroke='url(#paint0_linear_104_244)' />
    <defs>
      <linearGradient
        id='paint0_linear_104_244'
        x1={36.4225}
        y1={23}
        x2={36.4225}
        y2={310}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#3D1768' />
        <stop offset={1} stopColor='#3D1768' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector29Icon);
export { Memo as Vector29Icon };
