import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Box } from '../Box/Box';
import { Customer } from '../Customer/Customer';
import { Discount } from '../Discount/Discount';
import { Document } from '../Document/Document';
import { HomeIcons } from '../HomeIcons/HomeIcons';
import { NavTabs_TypeDefault } from '../NavTabs_TypeDefault/NavTabs_TypeDefault';
import { Repeat } from '../Repeat/Repeat';
import classes from './Frame61_InteractiveYes.module.css';
import { Frame159Icon } from './Frame159Icon';
import { HomeIconsIcon } from './HomeIconsIcon';
import { LogoIcon } from './LogoIcon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    navTabs?: ReactNode;
  };
}
/* @figmaId 1:110 */
export const Frame61_InteractiveYes: FC<Props> = memo(function Frame61_InteractiveYes(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame59}>
        <div className={classes.frame58}>
          <div className={classes.frame75}>
            <div className={classes.logo}>
              <LogoIcon className={classes.icon7} />
            </div>
            <div className={classes.frame52}>
              <NavTabs_TypeDefault
                swap={{
                  add: (
                    <HomeIcons
                      className={classes.homeIcons}
                      swap={{
                        homeIcons: <HomeIconsIcon className={classes.icon} />,
                      }}
                    />
                  ),
                }}
                text={{
                  name: <div className={classes.name}>Home</div>,
                }}
              />
              <NavTabs_TypeDefault
                swap={{
                  add: (
                    <Document
                      className={classes.document}
                      swap={{
                        vector: <VectorIcon className={classes.icon2} />,
                      }}
                    />
                  ),
                }}
                text={{
                  name: <div className={classes.name2}>Invoices</div>,
                }}
              />
              <NavTabs_TypeDefault
                swap={{
                  add: (
                    <Customer
                      className={classes.customer}
                      swap={{
                        vector: <VectorIcon2 className={classes.icon3} />,
                      }}
                    />
                  ),
                }}
                text={{
                  name: <div className={classes.name3}>Customers</div>,
                }}
              />
              <NavTabs_TypeDefault
                swap={{
                  add: (
                    <Box
                      className={classes.box}
                      swap={{
                        vector: <VectorIcon3 className={classes.icon4} />,
                      }}
                    />
                  ),
                }}
                text={{
                  name: <div className={classes.name4}>Products</div>,
                }}
              />
              {props.swap?.navTabs || (
                <NavTabs_TypeDefault
                  swap={{
                    add: (
                      <Repeat
                        className={classes.repeat}
                        swap={{
                          vector: <VectorIcon4 className={classes.icon5} />,
                        }}
                      />
                    ),
                  }}
                  text={{
                    name: <div className={classes.name5}>Recurring</div>,
                  }}
                />
              )}
              <NavTabs_TypeDefault
                swap={{
                  add: (
                    <Discount
                      className={classes.discount}
                      swap={{
                        vector: <VectorIcon5 className={classes.icon6} />,
                      }}
                    />
                  ),
                }}
                text={{
                  name: <div className={classes.name6}>Discount</div>,
                }}
              />
            </div>
          </div>
          <div className={classes.frame61}></div>
          <div className={classes.frame159}>
            <Frame159Icon className={classes.icon8} />
          </div>
        </div>
      </div>
    </div>
  );
});
