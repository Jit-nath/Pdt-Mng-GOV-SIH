// import React, { useEffect, useState } from 'react';

import ProjectCard from "./ProjectCard";

function ProjectContainer() {

    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     fetch('/api/projects') // Replace with your actual API endpoint
    //         .then(response => response.json())
    //         .then(data => setProjects(data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);


    return (
        <div className="p-6 mt-14 bg-white rounded-lg"
            style={{
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
                width: '92vw',
                height: '75vh',
                overflowY: 'auto',
                overflowX: 'hidden'

            }}>

            <ProjectCard name={"Project 1"} description={"some description"} status={"finished"} />
            <ProjectCard name={"Project 2"} description={"some description"} status={"failed"} />
        </div>
    );
}

export default ProjectContainer;