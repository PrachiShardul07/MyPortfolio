import React from 'react';

const Hero = () => {
  return (
    <section className="bg-primary text-white h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
        Prachi Shardul
      </h1>
      <p className="text-lg md:text-2xl max-w-xl">
        Java & Full-Stack  Web Development | Crafting Scalable & Secure Applications
      </p>
      <a
        href="#contact"
        className="mt-8 px-6 py-3 bg-secondary rounded-full text-lg font-semibold hover:bg-teal-500 transition"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Hero;

