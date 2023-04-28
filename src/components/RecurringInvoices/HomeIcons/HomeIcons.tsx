import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './HomeIcons.module.css';
import { HomeIconsIcon } from './HomeIconsIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    homeIcons?: ReactNode;
  };
}
/* @figmaId 1:151 */
export const HomeIcons: FC<Props> = memo(function HomeIcons(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.homeIcons}>{props.swap?.homeIcons || <HomeIconsIcon className={classes.icon} />}</div>
    </div>
  );
});
