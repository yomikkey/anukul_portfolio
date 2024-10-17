import { memo, SVGProps } from 'react';

const Ellipse23Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 695 269' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={347.5} cy={134.5} rx={347.5} ry={134.5} stroke='url(#paint0_linear_104_267)' />
    <defs>
      <linearGradient id='paint0_linear_104_267' x1={347.5} y1={0} x2={347.5} y2={269} gradientUnits='userSpaceOnUse'>
        <stop stopOpacity={0} />
        <stop offset={0.479167} stopColor='#763CAC' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse23Icon);
export { Memo as Ellipse23Icon };
