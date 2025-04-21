import React from 'react';
import { motion } from 'framer-motion';
//about me page also uses the most basic transitions identical to others and uses basic tags seen in html to create a text based page about me.
function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3 }}
    >
      <h2>About Me</h2>
      <p>
        Hi, I’m Anthony—a dedicated Digital Media student at UCF, specializing in the Web and Social Platforms track.
        Although I’m still early in my academic and professional journey, I hold a strong passion for web design,
        front-end development, and user experience. I love bringing creative ideas to life—whether through code, design,
        or personal projects.
      </p>
      <p>
        When I’m not immersed in digital media, you’ll likely find me sketching, cooking new recipes, exploring tabletop
        RPGs, nurturing my indoor plants, or diving into a fantasy novel. I aim to explore work that sparks creativity
        and opens doors to exciting job opportunities.
      </p>

      <ul className="about-list">
        <li>
          <strong>Technical Skills:</strong> HTML5, CSS3, JavaScript (ES6+), PHP, responsive design, Git & GitHub
        </li>
        <li>
          <strong>Tools & Software:</strong> Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, VS Code, WordPress, XAMPP
        </li>
        <li>
          <strong>UI/UX Abilities:</strong> Wireframing, prototyping, user research, accessibility, mobile-first design
        </li>
        <li>
          <strong>Soft Skills:</strong> Team leadership, project organization, creative problem-solving, adaptability, communication
        </li>
        <li>
          <strong>Creative Interests:</strong> Art (digital & traditional), tabletop gaming, worldbuilding, fantasy/sci-fi writing, indoor gardening, cooking
        </li>
      </ul>
    </motion.section>
  );
}

export default About;
