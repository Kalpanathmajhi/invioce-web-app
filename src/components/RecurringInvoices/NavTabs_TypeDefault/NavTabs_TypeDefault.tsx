import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Add } from '../Add/Add';
import classes from './NavTabs_TypeDefault.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  swap?: {
    add?: ReactNode;
  };
  text?: {
    name?: ReactNode;
  };
}
/* @figmaId 1:141 */
export const NavTabs_TypeDefault: FC<Props> = memo(function NavTabs_TypeDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame21}>
        {props.swap?.add || (
          <Add
            className={classes.add}
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
        )}
        {props.text?.name != null ? props.text?.name : <div className={classes.name}>Name</div>}
      </div>
    </div>
  );
});
