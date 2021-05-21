import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';

import Icon from 'components/icon';

ReactModal.setAppElement('#root');

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, className }: ModalProps) => (
  <ReactModal
    isOpen={open}
    onRequestClose={onClose}
    contentLabel={title}
    className={['c-modal', ...(className ? [className] : [])].join(' ')}
  >
    <button type="button" className="btn btn-outline-primary close-button" onClick={onClose}>
      <Icon name="close" />
    </button>
    <div className="content">{children}</div>
  </ReactModal>
);

export default Modal;
