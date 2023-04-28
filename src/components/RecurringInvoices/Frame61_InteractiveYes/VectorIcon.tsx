import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.2222 2V3.6C10.2222 4.48 11.0222 5.2 12 5.2H13.7778M4.44444 8.8H8M4.44444 12H11.5556M16 4V12C16 14.4 14.6667 16 11.5556 16H4.44444C1.33333 16 0 14.4 0 12V4C0 1.6 1.33333 0 4.44444 0H11.5556C14.6667 0 16 1.6 16 4Z'
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
