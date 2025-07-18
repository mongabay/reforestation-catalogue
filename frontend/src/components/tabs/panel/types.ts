import type { Key } from 'react';

import type { TabListState } from '@react-stately/tabs';

export interface TabPanelProps {
  /** Unique key of the panel */
  key?: Key;
  /** State of the panel */
  state: TabListState<object>;
}
