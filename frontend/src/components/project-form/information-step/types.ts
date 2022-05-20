import { FC } from 'react';

import { ProjectFormStep } from '../types';

export type InformationStepProps = ProjectFormStep['Component'] extends FC<infer P> ? P : never;
