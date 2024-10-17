import { memo, SVGProps } from 'react';

const GradientIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 642 720' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={321} cy={360} rx={321} ry={360} fill='url(#paint0_radial_104_157)' />
    <defs>
      <radialGradient
        id='paint0_radial_104_157'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(321 360) rotate(90) scale(360 321)'
      >
        <stop stopColor='#763CAC' />
        <stop offset={1} stopColor='#320F85' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(GradientIcon);
export { Memo as GradientIcon };
