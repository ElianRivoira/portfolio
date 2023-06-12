import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>

        <p className='text-xl mt-20'>
          After high school, I began to study computer engineering, a career from which I discovered web development,
          which generated a great curiosity and eventual passion in me. To increase my chances of finding a job in the
          industry, I decided to take a coding bootcamp at "Plataforma 5". During this intensive course I gained the
          ability to learn technologies in a short period of time, in addition to working in a team with agile
          methodologies such as SCRUM.
        </p>

        <br />

        <p className='text-xl'></p>
      </div>
    </div>
  );
};

export default About;
