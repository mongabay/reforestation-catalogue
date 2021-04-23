import React from 'react';
import ReactTippy from '@tippy.js/react';

import './style.scss';
import { TooltipProps } from './types';

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const mergeProps = {
    interactive: true,
    popperOptions: { modifiers: { flip: { enabled: false } } },
    trigger: 'click',
    arrow: true,
    theme: 'light',
    ...props,
  };
  const { children } = mergeProps;

  return <ReactTippy {...mergeProps}>{children}</ReactTippy>;
};

export default Tooltip;
