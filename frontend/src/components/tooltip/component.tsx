import { FC } from 'react';

import cx from 'classnames';

import Tippy from '@tippyjs/react/headless';
import { omit } from 'lodash-es';

import Arrow from './arrow';
import type { TooltipProps } from './types';

export const Tooltip: FC<TooltipProps> = ({ children, content, ...props }: TooltipProps) => (
  <Tippy
    {...omit(props, 'className')}
    render={(attrs) => (
      <div className={cx('relative p-4 text-sm bg-white shadow-md rounded-xl', props.className)}>
        {content}
        {props.arrow && <Arrow data-popper-arrow="" {...attrs} />}
      </div>
    )}
  >
    {children}
  </Tippy>
);

export default Tooltip;
