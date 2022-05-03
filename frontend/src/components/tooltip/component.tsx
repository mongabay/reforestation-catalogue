import React from 'react';

import ReactTippy from '@tippyjs/react';

import { TooltipProps } from './types';

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const mergeProps = {
    interactive: true,
    trigger: 'click',
    arrow: true,
    theme: 'light',
    ...props,
  };
  const { children } = mergeProps;

  return <ReactTippy {...mergeProps}>{children}</ReactTippy>;
};

export default Tooltip;
