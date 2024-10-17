import { memo, SVGProps } from 'react';

const Ellipse20Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 180 180' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={90} cy={90} r={90} fill='url(#paint0_linear_104_260)' />
    <defs>
      <linearGradient id='paint0_linear_104_260' x1={90} y1={0} x2={90} y2={180} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#301080' stopOpacity={0.6} />
        <stop offset={1} stopColor='#7840AD' stopOpacity={0.36} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse20Icon);
export { Memo as Ellipse20Icon };
