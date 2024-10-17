import { memo, SVGProps } from 'react';

const Ellipse2Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={2.99008} cy={2.95203} rx={2.41687} ry={2.20899} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse2Icon4);
export { Memo as Ellipse2Icon4 };
