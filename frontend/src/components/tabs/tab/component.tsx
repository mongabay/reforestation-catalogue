import React, { useRef } from 'react';

import cx from 'classnames';

import { useFocusRing } from '@react-aria/focus';
import { useTab } from '@react-aria/tabs';
import { mergeProps } from '@react-aria/utils';

import { TabProps } from './types';

export const Tab = ({ item, state, isLastItem = false }: TabProps) => {
  const ref = useRef(null);

  const { isFocusVisible, focusProps } = useFocusRing({ within: true });
  const { tabProps } = useTab({ key: item.key }, state, ref);

  return (
    <div
      {...mergeProps(tabProps, focusProps)}
      ref={ref}
      className={cx({
        'relative font-semibold transition-all outline-none after:empty-content after:block after:h-0.5 after:w-full after:absolute after:-bottom-1 after:left-0 after:transform after:origin-bottom after:scale-y-0 after:transition-transform after:bg-green':
          true,
        'text-grey-darker/30': state.selectedKey !== item.key,
        'text-green': state.selectedKey === item.key,
        'ring ring-green': isFocusVisible,
        'after:scale-y-100': state.selectedKey === item.key,
        'cursor-pointer': !state.disabledKeys.has(item.key),
        'opacity-60': state.disabledKeys.has(item.key),
        'mr-6': !isLastItem,
      })}
    >
      {item.rendered}
    </div>
  );
};

export default Tab;
