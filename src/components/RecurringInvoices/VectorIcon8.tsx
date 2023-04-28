import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 2.528H13.1496C14.7268 2.528 16 3.6 16 4.928V7.584M0 2.528L3.00238 0M0 2.528L3.00238 5.056M16 13.472H2.85036C1.27316 13.472 0 12.4 0 11.072V8.416M16 13.472L12.9976 16M16 13.472L12.9976 10.944'
      stroke='black'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
