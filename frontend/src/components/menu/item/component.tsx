import React from 'react';

import cx from 'classnames';

import { useFocus } from '@react-aria/interactions';
import { useMenuItem } from '@react-aria/menu';
import { mergeProps } from '@react-aria/utils';

import { ItemProps } from './types';

export const Item: React.FC<ItemProps> = ({ item, state, onAction, onClose }: ItemProps) => {
  const ref: React.MutableRefObject<HTMLLIElement | null> = React.useRef(null);

  const [isFocused, setFocused] = React.useState(false);

  const isDisabled = state.disabledKeys.has(item.key);
  const isActive = state.expandedKeys.has(item.key);

  const { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled,
      onAction,
      onClose,
    },
    state,
    ref
  );
  const { focusProps } = useFocus({ onFocusChange: setFocused });

  return (
    <li
      {...mergeProps(menuItemProps, focusProps)}
      ref={ref}
      className={cx({
        'flex justify-between items-center pl-8 pr-20 py-4 sm:py-2 text-grey-darker outline-none text-sm transition':
          true,
        'bg-green-light': isFocused,
        'font-bold': isActive,
        'cursor-pointer': !isDisabled,
        'opacity-40 cursor-default': isDisabled,
      })}
    >
      <div>{item.rendered}</div>
    </li>
  );
};

export default Item;
