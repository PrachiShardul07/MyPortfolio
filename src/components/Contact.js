import React from 'react';

const Contact = () => (
  <section className="py-16 px-6 bg-primary text-white" id="contact">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p>Email: <a href="mailto:prachishardul58@gmail.com" className="underline">prachishardul58@gmail.com</a></p>
      <p>Phone: +91-8419912937</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/PrachiShardul07" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/prachi-shardul-a29b94289" className="hover:underline">LinkedIn</a>
      </div>
    </div>
  </section>
);

export default Contact;
