import { memo, SVGProps } from 'react';

const HomeIconsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.0017 15.8139V12.8143M8.07198 0.636159L1.14302 6.18532C0.36314 6.80523 -0.136785 8.11503 0.0331897 9.09488L1.36299 17.0537C1.60295 18.4735 2.96275 19.6233 4.40253 19.6233H15.6008C17.0306 19.6233 18.4004 18.4635 18.6404 17.0537L19.9702 9.09488C20.1302 8.11503 19.6302 6.80523 18.8603 6.18532L11.9314 0.646158C10.8616 -0.213712 9.13182 -0.213712 8.07198 0.636159Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HomeIconsIcon);
export { Memo as HomeIconsIcon };
