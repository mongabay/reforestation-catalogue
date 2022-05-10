import dynamic from 'next/dynamic';

// NOTE: if not dynamic, the application crashes due to a react-aria bux:
// https://github.com/adobe/react-spectrum/issues/1055
const Modal = dynamic(import('./component'), { ssr: false });

export type { ModalProps } from './types';
export default Modal;
