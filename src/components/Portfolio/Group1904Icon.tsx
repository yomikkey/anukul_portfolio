import { memo, SVGProps } from 'react';

const Group1904Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.7535 0.429688L14.2319 2.82582L21.7143 0.429688M4.9789 19.0886L9.02681 14.5159L6.59119 11.4946M12.1401 0.429688L9.97681 2.68155L13.6158 2.83837M3.73124 0.430733L4.50662 2.2707L8.78976 2.57805M6.023 9.97136L9.18695 3.15304L0 2.57701M6.39124 10.4021L9.37967 14.1113L12.6757 10.3791L13.6981 3.42485L9.68186 3.18649L6.39124 10.4021Z'
      fill='url(#paint0_linear_104_296)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_104_296'
        x1={10.8571}
        y1={0.429687}
        x2={10.8571}
        y2={19.0886}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#693B93' stopOpacity={0.53} />
        <stop offset={1} stopColor='#693B93' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Group1904Icon);
export { Memo as Group1904Icon };
