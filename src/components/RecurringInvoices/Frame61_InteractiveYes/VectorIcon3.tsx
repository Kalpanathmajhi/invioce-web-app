import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.648986 4.35146L7.99584 8.43895L15.2928 4.37545M7.99584 15.686V8.43095M12.156 8.99088V6.06324L4.26001 1.67979M6.27353 0.383952L1.83047 2.75965C0.823713 3.29559 0 4.63942 0 5.74328V10.2627C0 11.3666 0.823713 12.7104 1.83047 13.2463L6.27353 15.622C7.22205 16.126 8.77795 16.126 9.72647 15.622L14.1695 13.2463C15.1763 12.7104 16 11.3666 16 10.2627V5.74328C16 4.63942 15.1763 3.29559 14.1695 2.75965L9.72647 0.383952C8.76963 -0.127984 7.22205 -0.127984 6.27353 0.383952Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
