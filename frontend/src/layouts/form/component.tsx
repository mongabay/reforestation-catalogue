import React from 'react';

import cx from 'classnames';

import { omit } from 'lodash-es';

import Header from '../static-page/header';

import { FormLayoutProps } from './types';

export const FormLayout: React.FC<FormLayoutProps> = ({
  children,
  headerProps = {},
  mainProps,
  ...rest
}: FormLayoutProps) => (
  <div {...rest}>
    <Header {...headerProps} />
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

export default FormLayout;
