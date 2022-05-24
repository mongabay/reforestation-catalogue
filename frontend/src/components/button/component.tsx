import React, { forwardRef } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import { omit } from 'lodash-es';

import { COMMON_CLASSES, COLOR_THEMES } from './constants';
import { isAnchorButton } from './helpers';
import { ButtonProps, HTMLButtonProps, HTMLAnchorProps } from './types';

export const Inner: React.ForwardRefRenderFunction<any, ButtonProps> = (
  { theme = 'primary-green', children, ...rest }: ButtonProps,
  ref
) => {
  const className = cx({
    [COMMON_CLASSES]: true,
    [COLOR_THEMES[theme]]: true,
    [rest.className]: !!rest.className,
  });

  if (isAnchorButton(rest)) {
    const elementProps = omit(
      rest,
      'children',
      'theme',
      'className',
      'to',
      'external'
    ) as Partial<HTMLAnchorProps>;

    if (rest.external) {
      return (
        <Link href={rest.to}>
          <a
            ref={ref}
            rel="noopener noreferrer"
            target="_blank"
            className={className}
            {...elementProps}
          >
            {children}
          </a>
        </Link>
      );
    }

    return (
      <Link href={rest.to}>
        <a ref={ref} className={className} {...elementProps}>
          {children}
        </a>
      </Link>
    );
  }

  const elementProps = omit(rest, 'children', 'theme', 'className') as Partial<HTMLButtonProps>;

  return (
    <button ref={ref} type="button" className={className} {...elementProps}>
      {children}
    </button>
  );
};

export const Button = forwardRef(Inner);

export default Button;
