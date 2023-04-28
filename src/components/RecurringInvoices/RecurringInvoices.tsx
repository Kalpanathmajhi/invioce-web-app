import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Buttons_TypeOutlineHoverFalse } from './Buttons_TypeOutlineHoverFalse/Buttons_TypeOutlineHoverFalse';
import { Buttons_TypePrimaryHoverFalse } from './Buttons_TypePrimaryHoverFalse/Buttons_TypePrimaryHoverFalse';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Frame61_InteractiveYes } from './Frame61_InteractiveYes/Frame61_InteractiveYes';
import { Frame164 } from './Frame164/Frame164';
import { Input_TypeNoLabel } from './Input_TypeNoLabel/Input_TypeNoLabel';
import { NavTabs_TypeActive } from './NavTabs_TypeActive/NavTabs_TypeActive';
import classes from './RecurringInvoices.module.css';
import { Repeat } from './Repeat/Repeat';
import { Right } from './Right/Right';
import { Search } from './Search/Search';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';
import { VectorIcon8 } from './VectorIcon8';

interface Props {
  className?: string;
}
/* @figmaId 1:175 */
export const RecurringInvoices: FC<Props> = memo(function RecurringInvoices(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.recurringInvoices}>Recurring Invoices</div>
      <div className={classes.frame114}>
        <div className={classes.frame111}>
          <div className={classes.RecurringInvoices}># recurring invoices</div>
          <div className={classes._215}>215</div>
        </div>
        <div className={classes.frame1112}>
          <div className={classes.recurringRevenue}>recurring revenue</div>
          <div className={classes._2500Month}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>€2500</span>
              <span className={classes.label2}>/month</span>
            </p>
          </div>
        </div>
        <div className={classes.frame1113}>
          <div className={classes.recurringOverdue}>recurring overdue</div>
          <div className={classes._22}>22</div>
        </div>
      </div>
      <div className={classes.rectangle30}></div>
      <Buttons_TypePrimaryHoverFalse
        className={classes.buttons}
        text={{
          clickMe: <div className={classes.clickMe}>Add recurring invoice</div>,
        }}
      />
      <div className={classes.frame126}>
        <div className={classes.perClient}>Per client</div>
        <div className={classes.frame122}>
          <Input_TypeNoLabel
            className={classes.input}
            text={{
              placeholderText: <div className={classes.placeholderText}>Search client</div>,
            }}
          />
          <Buttons_TypePrimaryHoverFalse
            className={classes.buttons2}
            swap={{
              icons: (
                <Search
                  className={classes.search}
                  swap={{
                    vector: <VectorIcon className={classes.icon} />,
                  }}
                />
              ),
            }}
            text={{
              clickMe: <div className={classes.clickMe2}>Search</div>,
            }}
          />
        </div>
        <div className={classes.frame121}>
          <div className={classes.group30}>
            <div className={classes.client}>Client</div>
            <div className={classes.Send}># send</div>
            <div className={classes.endDate}>end date</div>
            <div className={classes.interval}>Interval</div>
            <div className={classes.amount}>amount</div>
            <div className={classes.edit}>Edit</div>
          </div>
          <div className={classes.frame116}>
            <div className={classes.line43}></div>
            <div className={classes.frame115}>
              <div className={classes.frame34}>
                <div className={classes.rectangle23}></div>
                <div className={classes.madeByMack}>MadeByMack</div>
              </div>
              <div className={classes._25}>25</div>
              <div className={classes._24202024}>24-20-2024</div>
              <div className={classes._3Month}>3/month</div>
              <div className={classes._3000}>€3000</div>
              <Buttons_TypeOutlineHoverFalse
                className={classes.buttons3}
                swap={{
                  icons: (
                    <Right
                      className={classes.right}
                      swap={{
                        vector: <VectorIcon2 className={classes.icon2} />,
                      }}
                    />
                  ),
                }}
                text={{
                  clickMe: <div className={classes.clickMe3}>Edit</div>,
                }}
              />
            </div>
            <div className={classes.line37}></div>
            <div className={classes.frame1212}>
              <div className={classes.frame342}>
                <div className={classes.rectangle232}></div>
                <div className={classes.madeByMack2}>MadeByMack</div>
              </div>
              <div className={classes._252}>25</div>
              <div className={classes._242020242}>24-20-2024</div>
              <div className={classes._4Month}>4/month</div>
              <div className={classes._30002}>€3000</div>
              <Buttons_TypeOutlineHoverFalse
                className={classes.buttons4}
                swap={{
                  icons: (
                    <Right
                      className={classes.right2}
                      swap={{
                        vector: <VectorIcon3 className={classes.icon3} />,
                      }}
                    />
                  ),
                }}
                text={{
                  clickMe: <div className={classes.clickMe4}>Edit</div>,
                }}
              />
            </div>
            <div className={classes.line38}></div>
            <div className={classes.frame1222}>
              <div className={classes.frame343}>
                <div className={classes.rectangle233}></div>
                <div className={classes.madeByMack3}>MadeByMack</div>
              </div>
              <div className={classes._253}>25</div>
              <div className={classes._242020243}>24-20-2024</div>
              <div className={classes._1Month}>1/month</div>
              <div className={classes._30003}>€3000</div>
              <Buttons_TypeOutlineHoverFalse
                className={classes.buttons5}
                swap={{
                  icons: (
                    <Right
                      className={classes.right3}
                      swap={{
                        vector: <VectorIcon4 className={classes.icon4} />,
                      }}
                    />
                  ),
                }}
                text={{
                  clickMe: <div className={classes.clickMe5}>Edit</div>,
                }}
              />
            </div>
            <div className={classes.line39}></div>
            <div className={classes.frame123}>
              <div className={classes.frame344}>
                <div className={classes.rectangle234}></div>
                <div className={classes.madeByMack4}>MadeByMack</div>
              </div>
              <div className={classes._254}>25</div>
              <div className={classes._242020244}>24-20-2024</div>
              <div className={classes._3Year}>3/year</div>
              <div className={classes._30004}>€3000</div>
              <Buttons_TypeOutlineHoverFalse
                className={classes.buttons6}
                swap={{
                  icons: (
                    <Right
                      className={classes.right4}
                      swap={{
                        vector: <VectorIcon5 className={classes.icon5} />,
                      }}
                    />
                  ),
                }}
                text={{
                  clickMe: <div className={classes.clickMe6}>Edit</div>,
                }}
              />
            </div>
            <div className={classes.line40}></div>
            <div className={classes.frame124}>
              <div className={classes.frame345}>
                <div className={classes.rectangle235}></div>
                <div className={classes.madeByMack5}>MadeByMack</div>
              </div>
              <div className={classes._255}>25</div>
              <div className={classes._242020245}>24-20-2024</div>
              <div className={classes._1Year}>1/year</div>
              <div className={classes._30005}>€3000</div>
              <Buttons_TypeOutlineHoverFalse
                className={classes.buttons7}
                swap={{
                  icons: (
                    <Right
                      className={classes.right5}
                      swap={{
                        vector: <VectorIcon6 className={classes.icon6} />,
                      }}
                    />
                  ),
                }}
                text={{
                  clickMe: <div className={classes.clickMe7}>Edit</div>,
                }}
              />
            </div>
            <div className={classes.line41}></div>
            <div className={classes.frame125}>
              <div className={classes.frame346}>
                <div className={classes.rectangle236}></div>
                <div className={classes.madeByMack6}>MadeByMack</div>
              </div>
              <div className={classes._256}>25</div>
              <div className={classes._242020246}>24-20-2024</div>
              <div className={classes._2Month}>2/month</div>
              <div className={classes._30006}>€3000</div>
              <Buttons_TypeOutlineHoverFalse
                className={classes.buttons8}
                swap={{
                  icons: (
                    <Right
                      className={classes.right6}
                      swap={{
                        vector: <VectorIcon7 className={classes.icon7} />,
                      }}
                    />
                  ),
                }}
                text={{
                  clickMe: <div className={classes.clickMe8}>Edit</div>,
                }}
              />
            </div>
            <div className={classes.frame160}>
              <div className={classes.pause}>Pause</div>
              <div className={classes.duplicate}>Duplicate</div>
              <div className={classes.edit2}>Edit</div>
              <div className={classes.terminate}>Terminate</div>
              <div className={classes.skipNextDate}>Skip next date</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame16}>
        <div className={classes.ellipse1}>
          <Ellipse1Icon className={classes.icon9} />
        </div>
        <div className={classes.jortKKKKKKKKKKKK}>Jort KKKKKKKKKKKK</div>
      </div>
      <Frame164 className={classes.frame164} />
      <div className={classes.frame17}></div>
      <Frame61_InteractiveYes
        className={classes.frame127}
        swap={{
          navTabs: (
            <NavTabs_TypeActive
              swap={{
                add: (
                  <Repeat
                    className={classes.repeat}
                    swap={{
                      vector: <VectorIcon8 className={classes.icon8} />,
                    }}
                  />
                ),
              }}
              text={{
                name: <div className={classes.name}>Recurring</div>,
              }}
            />
          ),
        }}
      />
    </div>
  );
});
