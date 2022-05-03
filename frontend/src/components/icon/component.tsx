import { FC } from 'react';

import cx from 'classnames';

import type { IconProps } from './types';

export const Icon: FC<IconProps> = ({ icon: IconComponent, ...rest }: IconProps) => (
  <IconComponent
    {...rest}
    className={cx({
      'w-4 h-4': !rest.className,
      [rest.className]: !!rest.className,
    })}
  />
);

export default Icon;
