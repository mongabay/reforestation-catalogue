import { JSXElementConstructor, ReactElement } from 'react';

export interface TooltipProps {
  interactive: boolean;
  placement: string;
  popperOptions?: Record<string, unknown>;
  trigger: string;
  arrow?: boolean;
  theme?: string;
  appendTo: () => unknown;
  content: unknown;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}
