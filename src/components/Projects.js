import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'SeeMe',
      description:
        'Real-time video calling and chat app built with WebRTC, Socket.io, React, Node.js, and MongoDB. Enhanced security with Bcrypt.',
      link: 'https://github.com/PrachiShardul07',  // links to your GitHub
    },
    {
      name: 'CODEVIEW',
      description:
        'Collaborative code management platform (like GitHub) with MERN stack and REST API. Real-time sync and intuitive UI.',
      link: 'https://github.com/PrachiShardul07',  // links to your GitHub
    },
  ];

  return (
    <section className="py-16 px-6 bg-light text-dark" id="projects">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                View Project on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
