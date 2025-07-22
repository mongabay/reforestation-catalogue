import type { TabListState } from '@react-stately/tabs';
import type { Node } from '@react-types/shared';

export type TabProps = React.PropsWithChildren<{
  /** Item representing the tab */
  item: Node<object>;
  /** Whether it's the last item. Used for styling purposes. Default: `false` */
  isLastItem?: boolean;
  /** State of the tab */
  state: TabListState<object>;
}>;
