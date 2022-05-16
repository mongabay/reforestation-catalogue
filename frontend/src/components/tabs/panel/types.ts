import React from 'react';

import { SingleSelectListState } from '@react-stately/list';

import { TabsProps } from '../types';

export interface TabPanelProps {
  /** Unique key of the panel */
  key?: React.Key;
  /** State of the panel */
  state: SingleSelectListState<object>;
}
