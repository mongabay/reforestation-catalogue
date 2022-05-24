import React from 'react';

export interface MainProps {
  /** Props to apply to the container */
  props?: React.ComponentProps<'main'>;
}

export type NakedPageLayoutProps = React.PropsWithChildren<
  React.ComponentProps<'div'> & {
    /** Props for the `<main />` element of the page */
    mainProps?: MainProps['props'];
  }
>;
