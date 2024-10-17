import { memo, SVGProps } from 'react';

const Vector26Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 71 271' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M70.5 0.5C26.8333 48 -6.20008 162.5 0.999918 270.5' stroke='url(#paint0_linear_104_241)' />
    <defs>
      <linearGradient
        id='paint0_linear_104_241'
        x1={35.2556}
        y1={0.5}
        x2={35.2556}
        y2={270.5}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#3D1768' />
        <stop offset={1} stopColor='#3D1768' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector26Icon);
export { Memo as Vector26Icon };
