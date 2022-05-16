import React from 'react';

import { SingleSelectListState } from '@react-stately/list';
import { Node } from '@react-types/shared';

import { TabsProps } from '../types';

export type TabProps = React.PropsWithChildren<{
  /** Item representing the tab */
  item: Node<object>;
  /** Whether it's the last item. Used for styling purposes. Default: `false` */
  isLastItem?: boolean;
  /** State of the tab */
  state: SingleSelectListState<object>;
}>;
