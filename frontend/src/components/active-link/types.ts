import { LinkProps } from 'next/link';

export type ActiveLinkProps = LinkProps & {
  /** String to apply to the link when it is active */
  activeClassName: string;
  /** Class name to apply to the link */
  className?: string;
  /** Anchor element or text */
  children: React.ReactNode;
};
