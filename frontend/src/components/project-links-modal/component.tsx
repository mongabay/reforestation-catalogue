import { FC } from 'react';

import Button from 'components/button';
import Modal from 'components/modal';

import { ProjectLinksModalProps } from './types';

export const ProjectLinksModal: FC<ProjectLinksModalProps> = ({
  project,
  open,
  onDismiss,
}: ProjectLinksModalProps) => (
  <Modal title="Project links" open={open} onDismiss={onDismiss}>
    <div className="mb-2 md:px-20">
      <h1 className="font-serif text-3xl font-bold text-green">Project Links</h1>
      {project.project_links.map((link) => (
        <div key={link.url} className="mt-6">
          {link.title && <h2 className="mb-1 font-serif text-3xl">{link.title}</h2>}
          {link.description && <p className="mb-3">{link.description}</p>}
          <Button theme="link" className="inline-flex -ml-2" to={link.url} external>
            {link.url.replace(/^https?:\/\//, '').split('/')[0]}
          </Button>
        </div>
      ))}
    </div>
  </Modal>
);

export default ProjectLinksModal;
