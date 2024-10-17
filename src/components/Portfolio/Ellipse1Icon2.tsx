import { memo, SVGProps } from 'react';

const Ellipse1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 114 49' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse
      cx={55.6695}
      cy={21.0382}
      rx={55.6695}
      ry={21.0382}
      transform='matrix(-0.998499 0.0547787 -0.0655311 -0.997851 113.929 42.901)'
      fill='url(#paint0_linear_104_184)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_104_184'
        x1={55.6695}
        y1={0}
        x2={55.6695}
        y2={42.0764}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#361761' />
        <stop offset={0.197917} stopColor='#2D1949' />
        <stop offset={0.901042} stopColor='#2C1250' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse1Icon2);
export { Memo as Ellipse1Icon2 };
