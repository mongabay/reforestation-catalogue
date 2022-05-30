import { RadioProps } from './types';

export const INPUT_CLASSNAME: Record<RadioProps['theme'], string> = {
  default: 'w-4 h-4 focus-visible:ring-green focus:ring-transparent text-green border-grey-dark',
  toggle: 'sr-only peer',
};

export const LABEL_CLASSNAME: Record<RadioProps['theme'], string> = {
  default: 'ml-3 text-sm',
  toggle:
    'px-14 py-2 flex items-center rounded-full font-sans transition-all peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-disabled:opacity-60 peer-disabled:pointer-events-none text-sm font-semibold border border-green text-green hover:border-green-dark hover:text-green-dark peer-focus-visible:outline-green cursor-pointer peer-checked:bg-green peer-checked:text-white peer-checked:hover:bg-green-dark peer-checked:focus-visible:outline-green',
};
