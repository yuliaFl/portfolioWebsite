import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="py-12">
      <div className="about-container bg-white/90 shadow-lg rounded-2xl p-6">
        
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
          <div className="about-content">

        {/* Paragraphs */}
        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I started coding in 10th grade when I took a computer engineering
          course. I quickly realized working with hardware was not for me. I
          found coding a robot react to light or navigate around obstacles, more
          interesting. I then took a coding class, working with Java. For my
          final project, I used Java and GUI to recreate my parents' childhood
          game of a wolf catching eggs. I spent hours on that game, and enjoyed
          fixing every bug. The whole coding proccess became a puzzle for me.
        </motion.p>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I took the engineering course again and, as a team, we built an
          automated animal feeder from scratch, using motors, Arduino, and
          creating a Bluetooth app to control it. After high school, despite
          going into Police Foundations, I found myself coding during boring
          lectures. I decided to finish the diploma and go back to school for
          computer programming.
        </motion.p>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I have now graduated Humber College, which gave me hands-on experience
          with Java, SpringBoot, React, ReactNative, Python, Django, PL/SQL and
          manual and automated testing. I've also learned about project
          management, working with Agile and Waterfall methodologies, and
          understanding how to work with SCRUM.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
         I’ve now created two freelance websites for companies that are actively used today,
        and I’m now working on a larger project where I can apply both my frontend and backend skills. You can check out 
          <a
          href="https://trana-solutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 ml-1">
           Trana-Solutions 
          </a>
          . My second project, Fixiths, is temporarily unavailable, but you can still find screenshots and detailed feature descriptions in my projects section.

        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >With the experience I’ve gained and the interests I continue to pursue, my goal is to grow into a full-stack developer.</motion.p>
      </div>
       </div>
    </section>
  );
}

export default About;
