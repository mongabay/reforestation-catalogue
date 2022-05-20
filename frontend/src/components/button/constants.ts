import { ButtonCommonProps } from './types';

export const COMMON_CLASSES =
  'px-5 py-2 flex items-center rounded-full font-sans transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none text-sm font-semibold';

export const COLOR_THEMES: Record<NonNullable<ButtonCommonProps['theme']>, string> = {
  'primary-green': 'bg-green text-white hover:bg-green-dark focus-visible:outline-green',
  'primary-white': 'bg-white text-green hover:bg-grey focus-visible:outline-white',
  'secondary-green':
    'border border-green text-green hover:border-green-dark hover:text-green-dark focus-visible:outline-green',
  'secondary-white':
    'border border-white text-white hover:border-grey hover:text-grey focus-visible:outline-white',
  link: 'pl-2 pr-2 pt-1 pb-1 bg-transparent text-blue underline focus-visible:outline-blue',
  'link-primary':
    'pl-2 pr-2 pt-1 pb-1 bg-transparent text-green underline focus-visible:outline-green',
  transparent: 'bg-transparent text-grey-darker hover:bg-grey focus-visible:outline-grey-darker',
  naked: '',
};
