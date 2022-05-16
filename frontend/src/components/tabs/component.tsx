import React, { useRef } from 'react';

import cx from 'classnames';

import { useTabList } from '@react-aria/tabs';
import { useTabListState } from '@react-stately/tabs';

import TabPanel from './panel';
import Tab from './tab';
import { TabsProps } from './types';

export const Tabs = ({
  defaultSelectedKey,
  selectedKey,
  disabledKeys,
  onChange,
  className,
  expanded = true,
  children,
}: TabsProps) => {
  const ref = useRef(null);

  const state = useTabListState({
    defaultSelectedKey,
    selectedKey,
    disabledKeys,
    onSelectionChange: onChange,
    children,
  });

  const { tabListProps } = useTabList(
    {
      defaultSelectedKey,
      selectedKey,
      disabledKeys,
      onSelectionChange: onChange,
      children,
    },
    state,
    ref
  );

  return (
    <>
      <div
        {...tabListProps}
        ref={ref}
        className={cx(
          'relative after:empty-content after:block after:h-0.5 after:w-full after:absolute after:bottom-0 after:left-0 after:bg-grey-darker/20 w-full overflow-x-scroll py-1',
          className,
          {
            'flex justify-between': expanded,
            'inline-flex': !expanded,
          }
        )}
      >
        {Array.from(state.collection).map((item, i) => (
          <Tab
            key={item.key}
            item={item}
            isLastItem={i == state.collection.size - 1}
            state={state}
          />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </>
  );
};

export default Tabs;
