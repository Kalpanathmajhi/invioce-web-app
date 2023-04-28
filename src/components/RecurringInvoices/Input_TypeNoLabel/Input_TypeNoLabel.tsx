import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Input_TypeNoLabel.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    placeholderText?: ReactNode;
  };
}
/* @figmaId 1:61 */
export const Input_TypeNoLabel: FC<Props> = memo(function Input_TypeNoLabel(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button className={classes.mainButton}>
        {props.text?.placeholderText != null ? (
          props.text?.placeholderText
        ) : (
          <div className={classes.placeholderText}>Placeholder text</div>
        )}
      </button>
    </div>
  );
});
