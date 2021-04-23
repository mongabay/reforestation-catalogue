import { JSXElementConstructor, ReactChild, ReactElement } from 'react';

export interface TooltipProps {
  interactive: boolean;
  placement: string;
  popperOptions?: Record<string, unknown>;
  trigger: string;
  arrow?: boolean;
  theme?: string;
  appendTo: () => unknown;
  content: ReactChild | ReactChild[];
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}
