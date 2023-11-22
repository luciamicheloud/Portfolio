import React, { forwardRef } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from './projectsData';
import './projects.css';

const ProjectsContainer = ({text}, ref) => {
  return (
    <div ref={ref} className="projects-container">
      <h2>Projects</h2>
      <div className="project-carousel">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default forwardRef(ProjectsContainer);
