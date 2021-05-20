import React, { ReactNode } from 'react';
import { createMedia } from '@artsy/fresnel';

const breakpoints = {
  sm: 0,
  md: 768,
  lg: 1024,
  xl: 1192,
  xxl: 1440,
};

const { MediaContextProvider, Media } = createMedia({ breakpoints });

interface ResponsiveProps {
  className?: string;
  children: ReactNode;
  includeBiggerScreens?: boolean;
}

const Mobile: React.FC<ResponsiveProps> = ({ className, children }: ResponsiveProps) => {
  return (
    <Media lessThan="md" {...(!!className && { className })}>
      {children}
    </Media>
  );
};

const Desktop: React.FC<ResponsiveProps> = ({
  children,
  className,
  includeBiggerScreens = true,
}: ResponsiveProps) => {
  return (
    <Media
      {...(includeBiggerScreens && { greaterThanOrEqual: 'md' })}
      {...(!includeBiggerScreens && { at: 'md' })}
      {...(!!className && { className })}
    >
      {children}
    </Media>
  );
};

const DesktopLarge: React.FC<ResponsiveProps> = ({
  children,
  className,
  includeBiggerScreens = true,
}: ResponsiveProps) => {
  return (
    <Media
      {...(includeBiggerScreens && { greaterThanOrEqual: 'lg' })}
      {...(!includeBiggerScreens && { at: 'lg' })}
      {...(!!className && { className })}
    >
      {children}
    </Media>
  );
};

const DesktopXLarge: React.FC<ResponsiveProps> = ({
  children,
  className,
  includeBiggerScreens = true,
}: ResponsiveProps) => {
  return (
    <Media
      {...(includeBiggerScreens && { greaterThanOrEqual: 'xl' })}
      {...(!includeBiggerScreens && { at: 'xl' })}
      {...(!!className && { className })}
    >
      {children}
    </Media>
  );
};

const DesktopXXLarge: React.FC<ResponsiveProps> = ({ children, className }: ResponsiveProps) => {
  return (
    <Media greaterThanOrEqual="xxl" {...(!!className && { className })}>
      {children}
    </Media>
  );
};

export {
  breakpoints,
  Desktop,
  DesktopLarge,
  DesktopXLarge,
  DesktopXXLarge,
  Mobile,
  MediaContextProvider,
};
