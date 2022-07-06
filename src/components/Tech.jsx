import React from 'react';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import NextImg from '../assets/next.png';
import FireBase from '../assets/firebase.png';
import Tailwind from '../assets/tailwind.png';
import Angular from '../assets/angular.png';
import DotNet from '../assets/dotnet.png';
import Azure from '../assets/azure.png';
import Xamarin from '../assets/xamarin.png';

const Tech = () => {
  return (
    <div id="tech" name="tech">      
      <div className="flex flex-col pt-[15vh]
        min-h-full items-center w-full mx-auto px-4">        
        <div className='w-full max-w-[900px]'>          
          <h2 className='text-3xl sm:text-5xl'>My Skillset</h2>          
          <div className='row mt-8'>
            <h2 className='text-[#fb9c31] text-2xl
              sm:text-4xl uppercase font-bold'>Backend</h2>
            <div className='mx-auto grid grid-cols-2 sm:grid-cols-6
              gap-x-0 gap-y-8 mt-4'>
              <div className="item">
                <img src={DotNet} alt="skills"/>
                <span>.NET</span>
              </div>
              <div className="item">
                <img src={Node} alt="skills"/>
                <span>Node.js</span>
              </div>
              <div className="item">
                <img src={NextImg} alt="skills"/>
                <span>Next.js</span>
              </div>
            </div>
          </div>
          <div className='row mt-8'>
            <h2 className='text-[#fb9c31] text-2xl
              sm:text-4xl uppercase font-bold'>Frontend</h2>
            <div className='mx-auto grid grid-cols-2 sm:grid-cols-6
              gap-x-0 gap-y-8 mt-4'>
              <div className="item">
                <img src={Xamarin} alt="skills"/>
                <span>Xamarin</span>
              </div>
              <div className="item">
                <img src={Angular} alt="skills"/>
                <span>Angular</span>
              </div>
              <div className="item">
                <img src={ReactImg} alt="skills"/>
                <span>React</span>
              </div>
              <div className="item">
                <img src={Tailwind} alt="skills"/>
                <span>Tailwind</span>
              </div>
              <div className="item">
                <img src={JavaScript} alt="skills"/>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
          <div className='row mt-8'>
            <h2 className='text-[#fb9c31] text-2xl
            sm:text-4xl uppercase font-bold'>Infrastructure</h2>
            <div className='mx-auto grid grid-cols-2 sm:grid-cols-6
              gap-x-0 gap-y-8 mt-4'>
              <div className="item">
                <img src={Azure} alt="skills"/>
                <span>Azure</span>
              </div>
              <div className="item">
                <img src={FireBase} alt="skills"/>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech