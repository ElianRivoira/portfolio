import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { Canvas } from "@react-three/fiber";

import Blob from "./Blob/Blob.jsx";

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Currently, I'm learning Java with SpringBoot.
          </p>

          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <div className='blob'>
            <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
              <Blob />
            </Canvas>
          </div>
          {/* <div className='blob'>
            <svg
              viewBox='0 0 800 500'
              preserveAspectRatio='none'
              xmlns='http://www.w3.org/2000/svg'
              xlink='http://www.w3.org/1999/xlink'
              width='100%'
              id='blobSvg'
            >
              <g transform='translate(134.34715270996094, 15.774654388427734)'>
                <defs>
                  <linearGradient
                    id='gradient'
                    x1='0%'
                    y1='0%'
                    x2='0%'
                    y2='100%'
                  >
                    <stop
                      offset='0%'
                      style={{'stop-color': 'rgb(0, 180, 216)'}}
                    ></stop>
                    <stop
                      offset='100%'
                      style={{'stop-color': 'rgb(2, 62, 138)'}}
                    ></stop>
                  </linearGradient>
                </defs>
                <path fill='url(#gradient)'>
                  <animate
                    attributeName='d'
                    dur='10000ms'
                    repeatCount='indefinite'
                    values='
                    M429.5,295.5Q375,341,343.5,391.5Q312,442,246,453.5Q180,465,149.5,405Q119,345,94.5,297.5Q70,250,92.5,201Q115,152,153,109.5Q191,67,245,83.5Q299,100,361,112Q423,124,453.5,187Q484,250,429.5,295.5Z;
                    M421,303.5Q397,357,349.5,384Q302,411,249.5,412.5Q197,414,123.5,405Q50,396,27.5,323Q5,250,37,184.5Q69,119,127,83.5Q185,48,252.5,41.5Q320,35,381,73Q442,111,443.5,180.5Q445,250,421,303.5Z;
                    M460.5,313.5Q425,377,369,411Q313,445,249.5,446Q186,447,150.5,397.5Q115,348,66,299Q17,250,64.5,200Q112,150,155,120Q198,90,248.5,94.5Q299,99,366,108Q433,117,464.5,183.5Q496,250,460.5,313.5Z;
                    M411,312Q421,374,372,424.5Q323,475,261,440.5Q199,406,159,376Q119,346,94,298Q69,250,92,201Q115,152,145,85Q175,18,238.5,54.5Q302,91,366,105Q430,119,415.5,184.5Q401,250,411,312Z;
                    M429.5,295.5Q375,341,343.5,391.5Q312,442,246,453.5Q180,465,149.5,405Q119,345,94.5,297.5Q70,250,92.5,201Q115,152,153,109.5Q191,67,245,83.5Q299,100,361,112Q423,124,453.5,187Q484,250,429.5,295.5Z'
                  ></animate>
                </path>
              </g>
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
