import { memo, SVGProps } from 'react';

const GradientIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 572 641' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={286} cy={320.5} rx={286} ry={320.5} fill='url(#paint0_radial_104_160)' />
    <defs>
      <radialGradient
        id='paint0_radial_104_160'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(286 320.5) rotate(90) scale(320.5 286)'
      >
        <stop stopColor='#763CAC' />
        <stop offset={1} stopColor='#320F85' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(GradientIcon4);
export { Memo as GradientIcon4 };
