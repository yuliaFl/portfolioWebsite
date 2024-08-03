import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div id='about' className="about-background">
      <div className="about-content">
        <div className="title">About me</div>
        <div className="content">
          I started coding in 10th grade when I took a computer engineering
          course. I quickly realized working with hardware was not for me. I
          found coding a robot react to light or navigate around obstacles, more
          interesting. I then took a coding class, working with Java. For my
          final project, I used Java and GUI to recreate my parents' childhood
          game of a wolf catching eggs. I spent hours on that game, and enjoyed
          fixing every bug. The whole coding proccess became a puzzle for me.
        </div>
        <br />
        <div className="content">
          I took the engineering course again and, as a team, we built an
          automated animal feeder from scratch, using motors, Arduino, and
          creating a Bluetooth app to control it. After high school, despite
          going into Police Foundations, I found myself coding during boring
          lectures. I decided to finish the diploma and go back to school for
          computer programming.{" "}
        </div>
        <br />
        <div className="content">
          I have now graduated Humber College, which gave me hands-on experience
          with Java, SpringBoot, React, ReactNative, Python, Django, PL/SQL and
          manual and automated testing. I've also learned about project
          management, working with Agile and Waterfall methodologies, and
          understanding how to work with SCRUM.{" "}
        </div>
        <br />
        <div className="content">
          Currently I'm completing online courses on Udemy to grow my knowledge
          in Python and React. I created a freelance website for a
          <a href="http://www.fixiths.ca/">Handyman</a>. I'm also curious to
          touch on C# and .NET. With the experience and interests I have to this
          day, my goal is to work towards being a fullstack developer.
        </div>
      </div>
    </div>
  );
}

export default About;
