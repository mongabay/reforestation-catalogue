export interface TooltipProps {
  interactive: boolean;
  placement: string;
  popperOptions?: Record<string, unknown>;
  trigger: string;
  arrow?: boolean;
  theme?: string;
  appendTo: () => unknown;
  content: unknown;
}
