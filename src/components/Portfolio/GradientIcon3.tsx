import { memo, SVGProps } from 'react';

const GradientIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 625 700' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={312.5} cy={350} rx={312.5} ry={350} fill='url(#paint0_radial_104_159)' />
    <defs>
      <radialGradient
        id='paint0_radial_104_159'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(312.5 350) rotate(90) scale(350 312.5)'
      >
        <stop stopColor='#763CAC' />
        <stop offset={1} stopColor='#320F85' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(GradientIcon3);
export { Memo as GradientIcon3 };
