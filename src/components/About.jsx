import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>

        <p className='text-xl mt-20'>
          With a deep-rooted passion for technology since my early years, my path in the world of
          computer science began with the choice of Computer Engineering at the end of high school.
          This academic path provided me with a deep understanding of programming and, specifically,
          I was captivated by web development oriented programming, awakening in me an intense
          curiosity and dedication.
          <br /><br />
          Determined to increase my impact in the tech industry, I opted to participate in a
          demanding coding bootcamp at 'Platform 5'. During this intensive program, I acquired the
          ability to quickly assimilate new technologies and work effectively in teams using agile
          methodologies. At this point in my career, I am focused on seeking challenges that allow
          me to expand both my technical background and my ability to lead and contribute to the
          success of projects.
          <br /><br />
          My commitment to excellence is reflected in my continuous dedication to learning and the
          constant pursuit of relevant skills in the technology field. In addition, I am passionate
          about applying my knowledge in the development of web solutions, contributing to
          independent projects and applying best practices to ensure outstanding results.
          <br /><br />
          I am eager to continue evolving in my role, bringing my experience and expertise in
          a work environment that values innovation and offers opportunities to lead and continue
          learning in this exciting industry.
        </p>

        <br />

        <p className='text-xl'></p>
      </div>
    </div>
  );
};

export default About;
