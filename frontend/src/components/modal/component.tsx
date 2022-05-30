import { FC, useRef } from 'react';

import cx from 'classnames';

import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { useOverlay, usePreventScroll, useModal, OverlayContainer } from '@react-aria/overlays';

import Button from 'components/button';
import Icon from 'components/icon';

import crossIcon from 'svgs/cross.svg';

import { CONTENT_CLASSES, OVERLAY_CLASSES } from './constants';
import type { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({
  title,
  open,
  dismissable = true,
  size = 'default',
  children,
  className,
  scrollable = true,
  onDismiss,
}: ModalProps) => {
  const containerRef = useRef();
  const { overlayProps } = useOverlay(
    {
      isKeyboardDismissDisabled: !dismissable,
      isDismissable: dismissable,
      isOpen: open,
      onClose: onDismiss,
    },
    containerRef
  );
  const { modalProps } = useModal();
  const { dialogProps } = useDialog({ 'aria-label': title }, containerRef);

  usePreventScroll({ isDisabled: !open });

  if (!open) {
    return null;
  }

  return (
    <OverlayContainer>
      <div className={cx({ [OVERLAY_CLASSES]: true })}>
        <FocusScope
          contain
          restoreFocus
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        >
          <div {...overlayProps} {...dialogProps} {...modalProps} ref={containerRef}>
            <div
              className={cx({ [CONTENT_CLASSES[size]]: true, [className]: !!className })}
              style={{
                maxHeight: '90%',
              }}
            >
              {dismissable && (
                <div className="relative">
                  <Button
                    theme="naked"
                    onClick={onDismiss}
                    className="absolute top-0 pl-2 pr-2 -translate-y-full md:top-4 -right-3 md:-right-4"
                  >
                    <span className="sr-only">Close</span>
                    <Icon icon={crossIcon} className="inline-block w-5 h-5 fill-current" />
                  </Button>
                </div>
              )}

              {!scrollable && children}
              {scrollable && <div className="overflow-y-auto flex-grow-1">{children}</div>}
            </div>
          </div>
        </FocusScope>
      </div>
    </OverlayContainer>
  );
};

export default Modal;
