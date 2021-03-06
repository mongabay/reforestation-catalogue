import React from 'react';

import cx from 'classnames';

import { FocusScope } from '@react-aria/focus';
import { useMenu } from '@react-aria/menu';
import { useOverlay, DismissButton } from '@react-aria/overlays';
import { mergeProps } from '@react-aria/utils';
import { useTreeState } from '@react-stately/tree';

import Item from '../item';

import { PopupProps } from './types';

export const Popup: React.FC<PopupProps> = ({
  triggerRef,
  align,
  direction,
  autoFocus,
  domProps,
  children,
  disabledKeys,
  expandedKeys,
  onClose,
  onAction,
}: PopupProps) => {
  const ref = React.useRef(null);
  const overlayRef = React.useRef(null);

  const state = useTreeState({ children, selectionMode: 'none', disabledKeys, expandedKeys });
  const { menuProps } = useMenu({ autoFocus, children }, state, ref);
  const { overlayProps } = useOverlay(
    {
      onClose,
      shouldCloseOnBlur: true,
      isOpen: true,
      isDismissable: true,
      // Without the next line, users on iOS 12.5 (at minimum), some Android users and even us
      // testing using the responsive mode of Firefox have found an issue where the menu auto-closes
      // right after being triggered.
      // It seems that after the click on the trigger has been registered, another event is
      // dispatched later when the popup menu has already opened. Since the trigger is not part of
      // it, React Aria detects it as a click on an external element and closes the popup
      // immediately.
      // The problem does not come from this code but React Aria itself unfortunately. The same
      // issue can be replicated using their own menu example:
      // https://react-spectrum.adobe.com/react-aria/useMenuTrigger.html#example
      shouldCloseOnInteractOutside: (el) => !triggerRef.current.contains(el),
    },
    overlayRef
  );

  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={overlayRef}>
        <DismissButton onDismiss={onClose} />
        <div
          {...mergeProps(menuProps, domProps)}
          ref={ref}
          className={cx(
            'z-30 absolute transform whitespace-nowrap bg-white shadow-2xl rounded-2xl overflow-hidden',
            align === 'start' ? 'left-0' : 'right-0',
            direction === 'top' ? '-top-2 -translate-y-full' : '-bottom-2 translate-y-full'
          )}
        >
          <ul>
            {Array.from(state.collection).map((item) => (
              <Item
                key={item.key}
                item={item}
                state={state}
                onAction={onAction}
                onClose={onClose}
              />
            ))}
          </ul>
        </div>
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  );
};

export default Popup;
