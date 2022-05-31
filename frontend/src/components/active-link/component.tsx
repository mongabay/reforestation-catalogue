import React, { Children } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import { useActivePath } from 'hooks/router';

import { ActiveLinkProps } from './types';

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  activeClassName,
  children,
  ...props
}: ActiveLinkProps) => {
  const isActive = useActivePath((props.as ?? props.href).toString());

  const child = Children.only(children);
  const childClassName = child.props.className ?? '';

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: cx({
          [childClassName]: true,
          [activeClassName]: isActive,
        }),
        'aria-current': isActive ? 'page' : undefined,
      })}
    </Link>
  );
};

export default ActiveLink;
