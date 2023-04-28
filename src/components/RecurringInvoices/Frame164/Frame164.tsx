import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame164.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:97 */
export const Frame164: FC<Props> = memo(function Frame164(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.last30Days}>Last 30 days:</div>
      <div className={classes.frame165}>
        <div className={classes.frame166}>
          <div className={classes.paid}>Paid</div>
          <div className={classes._2400}>€24.000</div>
        </div>
        <div className={classes.frame167}>
          <div className={classes.pending}>pending</div>
          <div className={classes._4100}>€41.000</div>
        </div>
        <div className={classes.frame168}>
          <div className={classes.overdue}>overdue</div>
          <div className={classes._65600}>€65.600</div>
        </div>
      </div>
    </div>
  );
});
