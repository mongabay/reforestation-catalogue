import React, { Children } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import { useActivePath } from 'hooks/router';

import { ActiveLinkProps } from './types';

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  activeClassName,
  children,
  className,
  ...props
}: ActiveLinkProps) => {
  const isActive = useActivePath((props.as ?? props.href).toString());

  const childClassName =
    className ||
    (React.isValidElement(children) &&
    typeof children.props === 'object' &&
    children.props !== null &&
    'className' in children.props
      ? (children.props as { className?: string }).className
      : '');

  return (
    <Link
      {...props}
      className={cx(childClassName, { [activeClassName]: isActive })}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
