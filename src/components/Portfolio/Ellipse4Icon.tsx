import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={2.87054} cy={2.20899} rx={2.41687} ry={2.20899} fill='#693B93' />
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
