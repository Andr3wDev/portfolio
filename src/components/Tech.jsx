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
import Skill from '../components/Skill';

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
              <Skill src={DotNet} title=".NET" />
              <Skill src={Node} title="Node.js" />
              <Skill src={NextImg} title="Next.js" />
            </div>
          </div>
          <div className='row mt-8'>
            <h2 className='text-[#fb9c31] text-2xl
              sm:text-4xl uppercase font-bold'>Frontend</h2>
            <div className='mx-auto grid grid-cols-2 sm:grid-cols-6
              gap-x-0 gap-y-8 mt-4'>
              <Skill src={Xamarin} title="Xamarin" />
              <Skill src={Angular} title="Angular" />
              <Skill src={ReactImg} title="React" />
              <Skill src={Tailwind} title="Tailwind" />
              <Skill src={JavaScript} title="JavaScript" />
            </div>
          </div>
          <div className='row mt-8'>
            <h2 className='text-[#fb9c31] text-2xl
            sm:text-4xl uppercase font-bold'>Infrastructure</h2>
            <div className='mx-auto grid grid-cols-2 sm:grid-cols-6
              gap-x-0 gap-y-8 mt-4'>                
              <Skill src={Azure} title="Azure" />
              <Skill src={FireBase} title="Firebase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech