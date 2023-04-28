import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 5H17M13 9H17M15 13H17M10 13.33C9.93269 12.628 9.62187 11.9718 9.12141 11.475C8.62096 10.9782 7.96243 10.6722 7.26 10.61C6.75457 10.56 6.24543 10.56 5.74 10.61C5.03826 10.674 4.38078 10.9807 3.88069 11.4771C3.3806 11.9735 3.06918 12.6287 3 13.33M15 18H5C1 18 0 17 0 13V5C0 1 1 0 5 0H15C19 0 20 1 20 5V13C20 17 19 18 15 18ZM6.5 8.29C6.98004 8.29 7.44042 8.0993 7.77986 7.75986C8.1193 7.42042 8.31 6.96004 8.31 6.48C8.31 5.99996 8.1193 5.53958 7.77986 5.20014C7.44042 4.8607 6.98004 4.67 6.5 4.67C6.01996 4.67 5.55958 4.8607 5.22014 5.20014C4.8807 5.53958 4.69 5.99996 4.69 6.48C4.69 6.96004 4.8807 7.42042 5.22014 7.75986C5.55958 8.0993 6.01996 8.29 6.5 8.29Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
