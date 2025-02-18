import { forwardRef } from "react";
import ProjectContents from "./ProjectContents";

const Project = forwardRef((props, ref) => {
  return (
    <section className="project" ref={projectRef => (ref.current[2] = projectRef)}>
      <div className="project-wrap">
        <h2>PROJECT</h2>
        <ProjectContents />
        <ProjectContents />
      </div>
    </section>
  );
});

export default Project;