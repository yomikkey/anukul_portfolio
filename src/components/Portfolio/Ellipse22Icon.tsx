import { memo, SVGProps } from 'react';

const Ellipse22Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 764 269' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={382} cy={134.5} rx={382} ry={134.5} stroke='url(#paint0_linear_104_266)' />
    <defs>
      <linearGradient id='paint0_linear_104_266' x1={382} y1={0} x2={382} y2={269} gradientUnits='userSpaceOnUse'>
        <stop stopOpacity={0} />
        <stop offset={0.479167} stopColor='#763CAC' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse22Icon);
export { Memo as Ellipse22Icon };
