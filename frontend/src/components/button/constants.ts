import { ButtonCommonProps } from './types';

export const COMMON_CLASSES =
  'px-5 py-2 flex items-center rounded-full font-sans transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none text-sm font-semibold';

export const COLOR_THEMES: Record<NonNullable<ButtonCommonProps['theme']>, string> = {
  'primary-green':
    'bg-green border border-green text-white hover:bg-green-dark hover:border-green-dark focus-visible:outline-green',
  'primary-white':
    'bg-white border border-white text-green hover:bg-grey hover:border-grey focus-visible:outline-white',
  'primary-orange':
    'bg-orange border border-orange text-white hover:bg-orange/90 hover:border-orange/90 focus-visible:outline-orange',
  'secondary-green':
    'border border-green text-green hover:border-green-dark hover:text-green-dark focus-visible:outline-green',
  'secondary-white':
    'border border-white text-white hover:border-grey hover:text-grey focus-visible:outline-white',
  'secondary-orange':
    'border border-orange text-orange hover:bg-orange/10 focus-visible:outline-orange',
  'light-green':
    'bg-green/20 border border-transparent text-green hover:bg-green/40 focus-visible:outline-green',
  link: 'pl-2 pr-2 pt-1 pb-1 bg-transparent border border-transparent text-blue underline focus-visible:outline-blue',
  'link-primary':
    'pl-2 pr-2 pt-1 pb-1 bg-transparent border border-transparent text-green underline focus-visible:outline-green',
  transparent:
    'bg-transparent border border-transparent text-grey-darker hover:bg-grey hover:border-grey focus-visible:outline-grey-darker',
  naked: '',
};
