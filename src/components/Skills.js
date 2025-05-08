import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'Python', 'Core Java', 'SQL',
    'MERN Stack', 'REST APIs', 'MongoDB', 'Firebase',
    'Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD',
    'Git', 'Postman', 'Figma'
  ];

  return (
    <section className="py-16 px-6 bg-dark text-light" id="skills">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(skill => (
            <div key={skill} className="border p-4 rounded-lg shadow hover:bg-primary hover:text-white transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
