import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About Me
          </p>
        </div>

        <p className='text-xl mt-20'>
          Al terminar la secundaria, comencé a estudiar Ingeniería informática,
          carrera a partir de la cual descubrí el desarrollo web, que me generó
          una gran curiosidad y eventual pasión. Para aumentar mis oportunidades
          de insertarme laboralmente en la industria decidí realizar un coding
          bootcamp en “Plataforma 5”. Durante esa modalidad de cursado intensivo
          obtuve la capacidad de aprender tecnologías en un corto periodo de
          tiempo, además de trabajar en equipo con metodologías ágiles.
        </p>

        <br />

        <p className='text-xl'>
        </p>
      </div>
    </div>
  );
};

export default About;
