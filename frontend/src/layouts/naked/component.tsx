import React from 'react';

import cx from 'classnames';

import { omit } from 'lodash-es';

import { NakedPageLayoutProps } from './types';

export const NakedPageLayout: React.FC<NakedPageLayoutProps> = ({
  children,
  mainProps,
  ...rest
}: NakedPageLayoutProps) => (
  <div {...rest}>
    <main
      {...omit(mainProps, 'className')}
      className={cx({
        [mainProps?.className]: !!mainProps?.className,
      })}
    >
      {children}
    </main>
  </div>
);

export default NakedPageLayout;
