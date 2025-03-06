import { forwardRef } from "react";
import ProjectContents from "./ProjectContents";
import projectData from ".././data/projectData";

const Project = forwardRef((props, ref) => {

  return (
    <section className="project" ref={projectRef => (ref.current[2] = projectRef)}>
      <div className="project-wrap">
        <h2>PROJECT</h2>
        {
          projectData.map((projectData)=>{
            return <ProjectContents projectData={projectData} key={projectData.id}/>
          })
        }
      </div>
    </section>
  );
});

export default Project;