import React, { FC, Fragment, PropsWithChildren, ComponentType } from 'react';

import cx from 'classnames';

import Link from 'next/link';

import Icon from 'components/icon';

import ArrowIcon from 'svgs/left-arrow.svg';

import { BreadcrumbsProps } from './types';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, className }: BreadcrumbsProps) => (
  <ol
    role="navigation"
    aria-label="Breadcrumbs"
    className={cx(className, 'flex flex-wrap text-xs font-semibold text-grey-dark')}
  >
    {items.map((item, index) => {
      let Container: ComponentType<PropsWithChildren<{}>> = Fragment;
      if (item.url) {
        Container = function BreadcrumbsLink({ children }) {
          return (
            <Link href={item.url}>
              <a className="focus:outline focus:outline-2 focus:outline-offset-2 focus-visible:outline-green">
                {children}
              </a>
            </Link>
          );
        };
      }

      return (
        <li
          key={item.label}
          className="flex items-center mr-4 group last:mr-0"
          aria-current={index === items.length - 1}
        >
          <Container>{item.label}</Container>
          <Icon
            icon={ArrowIcon}
            aria-hidden
            className="w-2.5 h-2.5 ml-4 rotate-180 group-last:hidden"
          />
        </li>
      );
    })}
  </ol>
);

export default Breadcrumbs;
