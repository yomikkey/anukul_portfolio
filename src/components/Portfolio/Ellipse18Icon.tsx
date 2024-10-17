import { memo, SVGProps } from 'react';

const Ellipse18Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={22} cy={22} r={22} fill='#251C31' />
  </svg>
);

const Memo = memo(Ellipse18Icon);
export { Memo as Ellipse18Icon };
