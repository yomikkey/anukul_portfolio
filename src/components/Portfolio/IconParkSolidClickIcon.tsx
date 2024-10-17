import { memo, SVGProps } from 'react';

const IconParkSolidClickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_104_197'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={30}
      height={30}
    >
      <path d='M15.5 2.58334V7.75001' stroke='white' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.2083 14.2083L27.125 16.7917L23.25 19.375L27.125 23.25L23.25 27.125L19.375 23.25L16.7917 27.125L14.2083 14.2083Z'
        fill='white'
        stroke='white'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M24.6334 6.36664L20.9799 10.0201M6.36663 24.6334L10.0201 20.9799M2.58334 15.5H7.75M6.36663 6.36664L10.0201 10.0201'
        stroke='white'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </mask>
    <g mask='url(#mask0_104_197)'>
      <path d='M0 0H31V31H0V0Z' fill='white' />
    </g>
  </svg>
);

const Memo = memo(IconParkSolidClickIcon);
export { Memo as IconParkSolidClickIcon };
