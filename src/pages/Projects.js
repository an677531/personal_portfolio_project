import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projects from './projects.json';
//for projects page i have opted in for using a json file for easy project adding in the future, it only needs a title, description and the link or the content you want to include. this makes the page very modular and actually useful in the future
//im using .map to traverse the contentst of the json file which i pass in the selectedProject, upon selection of the button with assigned index number, it will display the contents with that said index number
function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = projects[selectedIndex];

  return (
    //this part handles the simple transitions
    <motion.section
      className="projects"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="projects-title">Projects</h2>

      <div className="project-buttons">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`project-button ${index === selectedIndex ? 'active' : ''}`}
          >
            {project.title}
          </button>
        ))}
      </div>
      <div className="project-display">
        <h3>{selectedProject.title}</h3>
        <p>{selectedProject.description}</p>
        {selectedProject.link && (
          <a href={selectedProject.link} target="_blank" rel="noreferrer">
            See More
          </a>
        )}
      </div>
    </motion.section>
  );
}

export default Projects;