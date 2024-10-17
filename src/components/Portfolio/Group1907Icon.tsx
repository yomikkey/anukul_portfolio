import { memo, SVGProps } from 'react';

const Group1907Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 306 275' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={153} cy={137.5} rx={153} ry={137.5} stroke='url(#paint0_linear_104_268)' />
    <ellipse cx={152.5} cy={173} rx={147.5} ry={82} stroke='url(#paint1_linear_104_268)' />
    <defs>
      <linearGradient id='paint0_linear_104_268' x1={153} y1={0} x2={153} y2={275} gradientUnits='userSpaceOnUse'>
        <stop offset={0.197917} stopOpacity={0} />
        <stop offset={1} stopColor='#763CAC' />
      </linearGradient>
      <linearGradient id='paint1_linear_104_268' x1={152.5} y1={91} x2={152.5} y2={255} gradientUnits='userSpaceOnUse'>
        <stop offset={0.197917} stopOpacity={0} />
        <stop offset={1} stopColor='#763CAC' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Group1907Icon);
export { Memo as Group1907Icon };
