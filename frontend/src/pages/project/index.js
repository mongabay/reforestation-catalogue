import React, { useEffect, useState } from 'react';

// components
import LayoutProjectPage from 'layout/projects/project-page';

function ProjectPage() {
  const [id, setId] = useState(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setId(window.location.search.slice(1).split('=')[1]);
    }
  }, []);

  if (!id) return null;

  return <LayoutProjectPage id={id} />;
}

export default ProjectPage;
