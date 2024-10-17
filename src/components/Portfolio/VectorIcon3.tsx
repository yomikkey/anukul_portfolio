import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7 0.294922C3.13367 0.294922 0 4.2111 0 9.04128C0 13.8715 3.13367 17.7876 7 17.7876C10.8657 17.7876 14 13.8715 14 9.04128C14 4.2111 10.8657 0.294922 7 0.294922ZM7.08167 14.1564C4.82533 14.1564 2.99833 11.8678 2.99833 9.04128C2.99833 6.21475 4.82533 3.92612 7.08167 3.92612C8.18417 3.92612 9.10583 4.43413 9.81283 5.25921L8.66133 6.7009V6.69798C8.23258 6.18632 7.68892 5.92393 7.08167 5.92393C5.73417 5.92393 4.63925 7.34959 4.63925 9.03836C4.63925 10.7257 5.73417 12.1557 7.08167 12.1557C8.30433 12.1557 9.13617 11.2796 9.30767 10.077H7.08167V8.08209H10.9229C10.9742 8.42466 11.0017 8.7818 11.0017 9.15644C11.0017 12.0792 9.44008 14.1564 7.08167 14.1564V14.1564Z'
      fill='url(#paint0_linear_104_288)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_104_288'
        x1={7}
        y1={0.294922}
        x2={7}
        y2={17.7876}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#693B93' stopOpacity={0.53} />
        <stop offset={1} stopColor='#693B93' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
