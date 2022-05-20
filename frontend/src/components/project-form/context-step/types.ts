import { FC } from 'react';

import { ProjectFormStep } from '../types';

export type ContextStepProps = ProjectFormStep['Component'] extends FC<infer P> ? P : never;
