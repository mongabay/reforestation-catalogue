import { JSXElementConstructor, ReactChild, ReactElement } from 'react';

export interface TooltipProps {
  interactive: boolean;
  placement: string;
  popperOptions?: Record<string, unknown>;
  trigger: string;
  arrow?: boolean;
  theme?: string;
  appendTo: Element | 'parent' | ((ref: Element) => Element);
  content: ReactChild | ReactChild[];
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}
