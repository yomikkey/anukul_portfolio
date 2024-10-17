import { memo, SVGProps } from 'react';

const Ellipse3Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={2.41687} cy={2.20899} rx={2.41687} ry={2.20899} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse3Icon3);
export { Memo as Ellipse3Icon3 };
