import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 3.16H13.84C15.5 3.16 16.84 4.5 16.84 6.16V9.48M0 3.16L3.16 0M0 3.16L3.16 6.32M16.84 16.84H3C1.34 16.84 0 15.5 0 13.84V10.52M16.84 16.84L13.68 20M16.84 16.84L13.68 13.68'
      stroke='black'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
