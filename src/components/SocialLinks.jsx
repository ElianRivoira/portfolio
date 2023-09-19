import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import useMediaQuery from '../hooks/useMediaQuery';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/elianrivoira/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/ElianRivoira',
    },
    {
      id: 3,
      child: (
        <>
          E-Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:rivoiraelian@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/elianRivoira.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <>
      {useMediaQuery(1024) ? (
        <footer className='bg-gray-800 py-4 flex justify-center'>
          <div className='flex w-full justify-evenly smMax:flex-wrap gap-3'>
            {links.map(({ id, child, href, style, download }) => (
              <div
                key={id}
                className={`flex justify-between items-center smMax:w-[150px] sm:w-full max-w-[160px] min-w-[95px] px-4 py-1 
                hover:rounded-md duration-300 bg-gray-500 rounded-md ${style}`}
              >
                <a
                  href={href}
                  className='flex flex-col-reverse gap-1 justify-between items-center w-full text-white'
                  download={download}
                  target='_blank'
                  rel='noreferrer'
                >
                  {child}
                </a>
              </div>
            ))}
          </div>
        </footer>
      ) : (
        <div className='flex flex-col top-[35%] left-0 fixed'>
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' +
                  ' ' +
                  style
                }
              >
                <a
                  href={href}
                  className='flex justify-between items-center w-full text-white'
                  download={download}
                  target='_blank'
                  rel='noreferrer'
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SocialLinks;
