import { NextRouter } from 'next/router';

import { RootState } from 'lib/store';

/**
 * Serialize some state as a base64 string
 * @param state State to serialize
 */
export const serialize = (state: Record<string, unknown>): Record<string, string> => {
  try {
    return Object.entries(state).reduce(
      (res, [key, value]) => ({
        ...res,
        [key]: Array.isArray(value) ? value.map((v) => JSON.stringify(v)) : JSON.stringify(value),
      }),
      {}
    );
  } catch (e) {
    return {};
  }
};

/**
 * Deserialize a string encoded as base64
 * @param serializedState String to deserialize
 * @param defaultState Default state if the deserialization fail
 */
export const deserialize = (
  serializedState: NextRouter['query'],
  defaultState: Partial<RootState> = {}
) => {
  try {
    return Object.entries(serializedState).reduce(
      (res, [key, value]) => ({
        [key]: Array.isArray(value) ? value.map((v) => JSON.parse(v)) : JSON.parse(value),
      }),
      {}
    );
  } catch (e) {
    console.error(e);
    return defaultState;
  }
};
