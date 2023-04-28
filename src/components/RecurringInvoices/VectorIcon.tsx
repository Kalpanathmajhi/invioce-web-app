import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 10L9 9M4.75 9.5C5.37378 9.5 5.99145 9.37714 6.56775 9.13843C7.14404 8.89972 7.66768 8.54984 8.10876 8.10876C8.54984 7.66768 8.89972 7.14404 9.13843 6.56775C9.37714 5.99145 9.5 5.37378 9.5 4.75C9.5 4.12622 9.37714 3.50855 9.13843 2.93225C8.89972 2.35596 8.54984 1.83232 8.10876 1.39124C7.66768 0.950164 7.14404 0.600282 6.56775 0.361572C5.99145 0.122862 5.37378 -9.29503e-09 4.75 0C3.49022 1.87722e-08 2.28204 0.500445 1.39124 1.39124C0.500445 2.28204 1.19209e-07 3.49022 1.19209e-07 4.75C1.19209e-07 6.00978 0.500445 7.21796 1.39124 8.10876C2.28204 8.99955 3.49022 9.5 4.75 9.5V9.5Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
