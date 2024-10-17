import { memo, SVGProps } from 'react';

const Ellipse3Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={2.57065} cy={2.54896} rx={2.41687} ry={2.20899} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse3Icon2);
export { Memo as Ellipse3Icon2 };
