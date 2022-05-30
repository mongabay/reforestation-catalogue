import { FC } from 'react';

import { useGlossaryContent } from 'hooks/cms';

import Button from 'components/button';
import LoadingSpinner from 'components/loading-spinner';
import Modal from 'components/modal';

import { GlossaryModalProps } from './types';

export const GlossaryModal: FC<GlossaryModalProps> = ({ open, onDismiss }: GlossaryModalProps) => {
  const { isLoading, isError, data } = useGlossaryContent();

  return (
    <Modal title="Glossary" open={open} onDismiss={onDismiss} scrollable={false}>
      <div className="flex flex-col h-full overflow-hidden md:px-20">
        <h1 className="flex-shrink-0 font-serif text-3xl font-bold text-green">Glossary</h1>
        <div className="flex flex-shrink-0 gap-3 mt-4 overflow-x-scroll sm:flex-wrap sm:mt-11">
          {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <Button
              key={letter}
              className="justify-center flex-shrink-0 w-8 h-8 pl-0 pr-0"
              to={`#${letter}`}
            >
              <span className="sr-only">Go to letter</span> {letter.toUpperCase()}
            </Button>
          ))}
        </div>
        {isLoading && (
          <div className="inline-block my-8 text-center">
            <LoadingSpinner inline transparent />
          </div>
        )}
        {isError && <p className="my-8 font-semibold text-center">Unable to load the glossary</p>}
        {!isLoading && !isError && (
          <div
            className="mt-3 overflow-y-auto flex-grow-1 scroll-smooth cms-content glossary"
            dangerouslySetInnerHTML={{ __html: data }}
          />
        )}
      </div>
    </Modal>
  );
};

export default GlossaryModal;
