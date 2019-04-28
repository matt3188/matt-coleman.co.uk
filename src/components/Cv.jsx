import React from 'react';
import Skill from './/Skill';

const Cv = () => (
  <div>
    <Skill label="HTML" percentage={90} delay={500} />
    <Skill label="CSS" percentage={80} delay={750} />
    <Skill label="Javascript" percentage={70} delay={1000} />
  </div>
);

export default Cv;
