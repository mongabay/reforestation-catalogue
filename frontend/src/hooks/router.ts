import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

export const useActivePath = (path: string) => {
  const [active, setActive] = useState(false);

  const { asPath, isReady } = useRouter();

  useEffect(() => {
    if (isReady) {
      const { pathname } = new URL(path, window.location.href);

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, window.location.href).pathname;

      const isActive =
        pathname === '/' ? activePathname == pathname : activePathname.startsWith(pathname);

      setActive(isActive);
    }
  }, [asPath, isReady, path]);

  return active;
};
