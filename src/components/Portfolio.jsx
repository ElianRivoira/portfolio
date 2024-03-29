import React from 'react';
import tmdb from '../assets/portfolio/tmdb.png';
import allio from '../assets/portfolio/al_lio.png';
import prode from '../assets/portfolio/prode.png';
import aidamSite from '../assets/portfolio/aidam-site.png';
import aidamApp from '../assets/portfolio/aidam-app.png';
import appointmentApp from '../assets/portfolio/appointment-app.png';
import rojodei from '../assets/portfolio/rojodei.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: aidamSite,
      demo: 'https://www.aidam.com.ar',
      code: 'https://github.com/ElianRivoira/aidam-site',
    },
    {
      id: 2,
      src: aidamApp,
      demo: '',
      code: 'https://github.com/ElianRivoira/aidam',
    },
    {
      id: 3,
      src: appointmentApp,
      demo: 'https://appointment-app-elianrivoira.vercel.app',
      code: 'https://github.com/ElianRivoira/appointmentApp',
    },
    {
      id: 4,
      src: rojodei,
      demo: 'https://rojodei.com.ar/#/',
      code: 'https://github.com/RojoEmiliano/Rojo-D-I',
    },
    {
      id: 5,
      src: tmdb,
      demo: 'https://tmdatabase.vercel.app',
      code: 'https://github.com/ElianRivoira/TMDB',
    },
    {
      id: 6,
      src: allio,
      demo: '',
      code: 'https://github.com/ElianRivoira/Al-Lio-Clothing-Store',
    },
    {
      id: 7,
      src: prode,
      demo: '',
      code: 'https://github.com/ElianRivoira/PRODE-Tonic3',
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='img' className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  <a href={demo} target='_blank' rel='noreferrer'>
                    Deploy
                  </a>
                </button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  <a href={code} target='_blank' rel='noreferrer'>
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
