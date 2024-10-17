import { memo, SVGProps } from 'react';

const Ellipse21Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 881 269' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={440.5} cy={134.5} rx={440.5} ry={134.5} stroke='url(#paint0_linear_104_265)' />
    <defs>
      <linearGradient id='paint0_linear_104_265' x1={440.5} y1={0} x2={440.5} y2={269} gradientUnits='userSpaceOnUse'>
        <stop stopOpacity={0} />
        <stop offset={0.479167} stopColor='#763CAC' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse21Icon);
export { Memo as Ellipse21Icon };
