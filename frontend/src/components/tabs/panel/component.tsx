import React, { useRef } from 'react';

import cx from 'classnames';

import { useFocusRing } from '@react-aria/focus';
import { useTabPanel } from '@react-aria/tabs';
import { mergeProps } from '@react-aria/utils';

import { TabPanelProps } from './types';

export const TabPanel = ({ state }: TabPanelProps) => {
  const ref = useRef(null);

  const { tabPanelProps } = useTabPanel({}, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <div
      {...mergeProps(tabPanelProps, focusProps)}
      ref={ref}
      className={cx({
        'w-full': true,
        'outline-none': true,
        'ring ring-green': isFocusVisible,
      })}
    >
      {state.selectedItem?.props.children}
    </div>
  );
};

export default TabPanel;
