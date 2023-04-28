import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Icons_NameAdd } from '../Icons_NameAdd/Icons_NameAdd';
import classes from './Buttons_TypePrimaryHoverFalse.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icons?: ReactNode;
  };
  text?: {
    clickMe?: ReactNode;
  };
}
/* @figmaId 1:9 */
export const Buttons_TypePrimaryHoverFalse: FC<Props> = memo(function Buttons_TypePrimaryHoverFalse(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.clickMe != null ? props.text?.clickMe : <div className={classes.clickMe}>Click me</div>}
      {props.swap?.icons || (
        <Icons_NameAdd
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
      )}
    </button>
  );
});
