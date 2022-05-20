import { FC } from 'react';

import { ProjectFormStep } from '../types';

export type SocialStepProps = ProjectFormStep['Component'] extends FC<infer P> ? P : never;
