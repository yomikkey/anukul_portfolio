import { memo, SVGProps } from 'react';

const Ellipse6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 542 330' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={271} cy={165} rx={271} ry={165} fill='url(#paint0_radial_104_246)' />
    <defs>
      <radialGradient
        id='paint0_radial_104_246'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(271 165) rotate(90) scale(165 271)'
      >
        <stop stopColor='#763CAC' />
        <stop offset={1} stopColor='#320F85' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse6Icon);
export { Memo as Ellipse6Icon };
