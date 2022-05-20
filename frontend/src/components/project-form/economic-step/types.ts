import { FC } from 'react';

import { ProjectFormStep } from '../types';

export type EconomicStepProps = ProjectFormStep['Component'] extends FC<infer P> ? P : never;
