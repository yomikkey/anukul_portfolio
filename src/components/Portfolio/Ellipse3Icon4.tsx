import { memo, SVGProps } from 'react';

const Ellipse3Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 258 259' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={129} cy={129.5} rx={129} ry={129.5} fill='url(#paint0_radial_104_302)' />
    <defs>
      <radialGradient
        id='paint0_radial_104_302'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(129 129.5) rotate(90) scale(129.5 129)'
      >
        <stop offset={0.177083} stopColor='white' />
        <stop offset={1} stopColor='#434343' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse3Icon4);
export { Memo as Ellipse3Icon4 };
