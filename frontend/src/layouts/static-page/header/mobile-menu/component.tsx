import { FC } from 'react';

import { useRouter } from 'next/router';

import { useActivePath } from 'hooks/router';

import Button from 'components/button';
import Icon from 'components/icon';
import Menu, { MenuItem } from 'components/menu';

import MenuIcon from 'svgs/menu.svg';

import { MobileMenuProps } from './types';

export const MobileMenu: FC<MobileMenuProps> = () => {
  const router = useRouter();

  const isAboutActive = useActivePath('/about');
  const isExploreActive = useActivePath('/explore');

  const expandedKeys = [
    isAboutActive ? '/about' : null,
    isExploreActive ? '/explore' : null,
  ].filter((key) => !!key);

  return (
    <Menu
      className="sm:hidden"
      align="end"
      expandedKeys={expandedKeys}
      Trigger={
        <Button theme="naked" className="pt-1 pb-1 pl-2 pr-2 -mr-2 text-white">
          <span className="sr-only">Navigation</span>
          <Icon icon={MenuIcon} className="w-6 h-6" />
        </Button>
      }
      onAction={(key) => router.push(key as string)}
    >
      <MenuItem key="/about">About</MenuItem>
      <MenuItem key="/explore">Explore</MenuItem>
      <MenuItem key="/explore/project/new">Submit Project</MenuItem>
    </Menu>
  );
};

export default MobileMenu;
