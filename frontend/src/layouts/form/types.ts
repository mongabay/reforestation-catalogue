import React from 'react';

import { FooterProps } from 'layouts/static-page/footer';
import { HeaderProps } from 'layouts/static-page/header';

export interface MainProps {
  /** Props to apply to the container */
  props?: React.ComponentProps<'main'>;
}

export type FormLayoutProps = React.PropsWithChildren<
  React.ComponentProps<'div'> & {
    /** Props for the header */
    headerProps?: HeaderProps;
    /** Props for the `<main />` element of the page */
    mainProps?: MainProps['props'];
    /** Props for the footer */
    footerProps?: FooterProps['props'];
  }
>;
