import { FC } from 'react';

import Modal from 'components/modal';

import { GlossaryModalProps } from './types';

export const GlossaryModal: FC<GlossaryModalProps> = ({ open, onDismiss }: GlossaryModalProps) => (
  <Modal title="Glossary" size="wide" open={open} onDismiss={onDismiss}>
    <div className="md:px-20">
      <h1 className="font-serif text-3xl font-bold text-green">Glossary</h1>
      <p className="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </Modal>
);

export default GlossaryModal;
