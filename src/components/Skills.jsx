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

const Skills = () => {
  return (
    <section id="skills" name="skills">      
        <div className="flex flex-col
            items-center w-full mx-auto px-4"> 

            <div className='section-title text-center'>
            <h2 className='text-black'>My Skills</h2>         
            <p className='text-base sm:text-lg'>
                These are some of my core technologies.
            </p>
            </div>
            
            <div className='mx-auto grid grid-cols-2 sm:grid-cols-5 text-center pt-8
                gap-x-0 gap-y-10 w-full lg:w-[80%]'>

                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={DotNet} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>.NET</p>
                </div>
                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={Azure} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>Azure</p>
                </div>
                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={Xamarin} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>Xamarin</p>
                </div>
                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={ReactImg} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>React</p>
                </div>
                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={Angular} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>Angular</p>
                </div>
                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={JavaScript} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>JavaScript</p>
                </div>
                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={NextImg} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>Next.js</p>
                </div>
                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={Node} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>Node.js</p>
                </div>
                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={FireBase} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>Firebase</p>
                </div>
                <div className='group'>
                    <img className='group-hover:scale-110 duration-500 w-14 mx-auto' src={Tailwind} alt='html' />
                    <p className='my-2 text-base sm:text-lg'>Tailwind</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills