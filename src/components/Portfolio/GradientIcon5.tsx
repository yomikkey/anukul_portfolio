import { memo, SVGProps } from 'react';

const GradientIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 385 431' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={192.5} cy={215.5} rx={192.5} ry={215.5} fill='url(#paint0_radial_104_161)' />
    <defs>
      <radialGradient
        id='paint0_radial_104_161'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(192.5 215.5) rotate(90) scale(215.5 192.5)'
      >
        <stop stopColor='#763CAC' />
        <stop offset={1} stopColor='#320F85' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(GradientIcon5);
export { Memo as GradientIcon5 };
