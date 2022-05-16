import React from 'react';

import { TabListProps } from '@react-types/tabs';

export type TabsProps = {
  /** Key of the default active tab */
  defaultSelectedKey?: React.Key;
  /** Key of the active tab */
  selectedKey?: React.Key;
  /** List of the keys of the tabs that are disabled */
  disabledKeys?: React.Key[];
  /** Class to attach to the component */
  className?: string;
  /** Whether tabs should expand to fill the available width. Default to `true` */
  expanded?: boolean;
  children: TabListProps<object>['children'];
  /** Callback executed when the active tab changes */
  onChange?: (key: React.Key) => void;
};
