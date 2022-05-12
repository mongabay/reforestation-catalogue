import { FC, useEffect } from 'react';

import { useRouter } from 'next/router';

import { usePreviousImmediate } from 'rooks';

import { useAppSelector } from 'hooks/redux';

import { globalSelectors } from 'modules';

import { URLSyncProps } from './types';

export const URLSync: FC<URLSyncProps> = () => {
  const router = useRouter();

  const serializedState = useAppSelector(globalSelectors.selectSerializedState);
  const previousSerializedState = usePreviousImmediate(serializedState);

  // Each time the serialized state changes, we update the URL
  useEffect(() => {
    if (serializedState !== previousSerializedState) {
      router.replace('/explore', { query: serializedState }, { shallow: true });
    }
  }, [router, serializedState, previousSerializedState]);

  return null;
};

export default URLSync;
