import { FC } from 'react';

import { ProjectFormStep } from '../types';

export type InstitutionalStepProps = ProjectFormStep['Component'] extends FC<infer P> ? P : never;
