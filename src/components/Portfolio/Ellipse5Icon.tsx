import { memo, SVGProps } from 'react';

const Ellipse5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 193 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse
      cx={96.3633}
      cy={36.6493}
      rx={94.292}
      ry={28.9495}
      transform='rotate(-4.74441 96.3633 36.6493)'
      stroke='white'
    />
  </svg>
);

const Memo = memo(Ellipse5Icon);
export { Memo as Ellipse5Icon };
