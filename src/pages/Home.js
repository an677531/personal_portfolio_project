import React from 'react';
import { motion } from 'framer-motion';

//Here i have made a very basic home page with nice transitions. the background images is very basic and added by css and not here.
function Home() {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Hi, I am Anthony!</h2>
      <p>I'm a dedicated Digital Media student at UCF.</p>

    </motion.section>
  );
}

export default Home;
