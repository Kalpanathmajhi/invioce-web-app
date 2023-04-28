import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.5 2.5V4.5C11.5 5.6 12.4 6.5 13.5 6.5H15.5M5 11H9M5 15H13M18 5V15C18 18 16.5 20 13 20H5C1.5 20 0 18 0 15V5C0 2 1.5 0 5 0H13C16.5 0 18 2 18 5Z'
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
