import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 20L18 18M9.5 19C10.7476 19 11.9829 18.7543 13.1355 18.2769C14.2881 17.7994 15.3354 17.0997 16.2175 16.2175C17.0997 15.3354 17.7994 14.2881 18.2769 13.1355C18.7543 11.9829 19 10.7476 19 9.5C19 8.25244 18.7543 7.0171 18.2769 5.86451C17.7994 4.71191 17.0997 3.66464 16.2175 2.78249C15.3354 1.90033 14.2881 1.20056 13.1355 0.723144C11.9829 0.245725 10.7476 -1.85901e-08 9.5 0C6.98044 3.75443e-08 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 2.38419e-07 6.98044 2.38419e-07 9.5C2.38419e-07 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19V19Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
