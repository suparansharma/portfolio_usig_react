import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';

const Project = () => {

    const[projects,setProjects] = useState(data_projects)

    const handleFilterCategory = (name) =>{
       const new_array = data_projects.filter(project => project.category.includes(name))
       setProjects(new_array)
    }
    return (

        <div className="container projects">
            <div className="projects__navbar">
            
                
                {/* <div onClick={() => setProjects(data_projects)}>ALL</div>
                <div onClick={() => handleFilterCategory('React')}>React</div>
                <div onClick={() => handleFilterCategory('C#')}>C#</div>
                <div onClick={() => handleFilterCategory('VS')}>VS</div>
                <div onClick={() => handleFilterCategory('node.js')}>node.js</div> */}
            </div>
        <div className="row">
            {
                data_projects.map(project=>
                    <ProjectCard key={project.name} project={project}/>
                    )
            }
        </div>
        </div>
    );
};

export default Project;