import { memo, SVGProps } from 'react';

const HomeIconsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.00135 12.894V10.4483M6.45758 0.518697L0.914418 5.04325C0.290512 5.54869 -0.109428 6.61665 0.0265518 7.41558L1.09039 13.9048C1.28236 15.0625 2.3702 16 3.52202 16H12.4807C13.6245 16 14.7203 15.0543 14.9123 13.9048L15.9761 7.41558C16.1041 6.61665 15.7042 5.54869 15.0883 5.04325L9.54512 0.52685C8.68924 -0.174252 7.30545 -0.174252 6.45758 0.518697Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HomeIconsIcon);
export { Memo as HomeIconsIcon };
