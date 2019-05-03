import React from 'react';

import Skill from 'components/Skill';

const skills = [
  {
    label: 'HTML/CSS',
    percentage: 90
  },
  {
    label: 'Javascript',
    percentage: 75
  }
];

const Cv = () => (
  <div className="col-md-8 offset-md-2">
    <p className="intro-text">
      I am a strong and passionate front end developer with good communication skills and a keen eye for detail. I work
      well in a team just as well as I do on my own.
    </p>
    <p>
      I have a background in design, which I believe gives me an edge when it comes to creating a fluent and visually
      pleasing experience, it also allows me to bridge the gap between design and development within a team. I like to
      create modular and portable code with a DRY approach and I also try and future proof my code as best I can.
    </p>
    <p>
      My strengths include but are not limited too, HTML, CSS/SASS, Javascript, Webpack. I also have experience with
      React JS, Jira, Agile methodology, Git, Node.js, RESTful APIs, SMACCS, Wordpress, Django, Sitecore and Drupal.
    </p>

    <div className="skill-container">
      {skills.map((skill, i) => (
        <Skill key={skill.label} label={skill.label} percentage={skill.percentage} delay={250 * i} />
      ))}
    </div>
  </div>
);

export default Cv;
