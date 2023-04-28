import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 15.84L6.52 9.32C7.29 8.55 7.29 7.29 6.52 6.52L6.92388e-07 0'
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
