import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.78 5.44L9.61 10.55L18.38 5.47M9.61 19.61V10.54M14.61 11.24V7.58L5.12 2.1M7.54 0.48L2.2 3.45C0.99 4.12 0 5.8 0 7.18V12.83C0 14.21 0.99 15.89 2.2 16.56L7.54 19.53C8.68 20.16 10.55 20.16 11.69 19.53L17.03 16.56C18.24 15.89 19.23 14.21 19.23 12.83V7.18C19.23 5.8 18.24 4.12 17.03 3.45L11.69 0.48C10.54 -0.16 8.68 -0.16 7.54 0.48Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
