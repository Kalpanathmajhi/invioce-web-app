import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.996 13.6247L12.996 7.32427M12.491 13.0997H12.5M7.491 7.84931H7.499M1.985 13.2677L0.465 11.6716C-0.155 11.0205 -0.155 9.94946 0.465 9.29842L1.985 7.7023C2.245 7.42928 2.455 6.89374 2.455 6.51572V4.25805C2.455 3.33399 3.175 2.57793 4.055 2.57793H6.205C6.565 2.57793 7.075 2.35742 7.335 2.0844L8.855 0.488285C9.475 -0.162762 10.495 -0.162762 11.115 0.488285L12.635 2.0844C12.895 2.35742 13.405 2.57793 13.765 2.57793H15.915C16.795 2.57793 17.515 3.33399 17.515 4.25805V6.51572C17.515 6.89374 17.725 7.42928 17.985 7.7023L19.505 9.29842C20.125 9.94946 20.125 11.0205 19.505 11.6716L17.985 13.2677C17.725 13.5407 17.515 14.0763 17.515 14.4543V16.7119C17.515 17.636 16.795 18.3921 15.915 18.3921H13.765C13.405 18.3921 12.895 18.6126 12.635 18.8856L11.115 20.4817C10.495 21.1328 9.475 21.1328 8.855 20.4817L7.335 18.8856C7.075 18.6126 6.565 18.3921 6.205 18.3921H4.055C3.175 18.3921 2.455 17.636 2.455 16.7119V14.4543C2.455 14.0658 2.245 13.5302 1.985 13.2677Z'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
