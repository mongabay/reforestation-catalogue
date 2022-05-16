import { FC } from 'react';

import Modal from 'components/modal';

import { ProjectLinksModalProps } from './types';

export const ProjectLinksModal: FC<ProjectLinksModalProps> = ({
  open,
  onDismiss,
}: ProjectLinksModalProps) => (
  <Modal title="Project links" open={open} onDismiss={onDismiss}>
    <div className="md:px-20">
      <h1 className="font-serif text-3xl font-bold text-green">Project links</h1>
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

export default ProjectLinksModal;
