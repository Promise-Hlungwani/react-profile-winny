import React from 'react';
import SkillBar from 'react-skillbars';

function Resume() {
  const skills = [
    { type: 'Javascript', level: 50 },
    { type: 'React', level: 55 },
    { type: 'NoSQL', level: 60 },
    { type: ' Visual Basic', level: 68 },
    { type: 'HTML', level: 70 },
    { type: 'PL/SQL', level: 75 },
    { type: 'Java', level: 78 },
  ];

  const colors = {
    bar: '#747474',
    title: {
      text: '#fff',
      background: '#245a60',
    },
  };
  return (
    <div className="resume">
      <h1> Technical Skills</h1>
      <div className="skill-bar">
        <SkillBar skills={skills} colors={colors} />
      </div>
    </div>
  );
}

export default Resume;
