import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { Typewriter } from "react-simple-typewriter"
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home" name="home">
      <div className="flex flex-col pt-[15vh] h-screen
        w-full max-w-[1000px] mx-auto px-5 sm:px-7">
        <span className='text-3xl sm:text-5xl'>
          I'm Andrew Brown
        </span>
        <h2 className='text-[#fb9c31] text-2xl
         sm:text-4xl uppercase font-bold'>
            <Typewriter words={["Software Developer"]} 
            typeSpeed={80} deleteSpeed={50} delaySpeed={1500} />
        </h2>
        <p className='text-base sm:text-lg mt-7 mb-9 max-w-[700px]'>
          I'm a Junior Developer and specialise in creating clean,
          robust and scalable Software.
          Currently, I'm building responsive
          full-stack Web Applications.
        </p>
        <div>
        <NavLink to="projects">
          <button className='text-base sm:text-lg home-btn
            shadow-sm text-white bg-[#26293a] hover:text-[#fb9c31]'>
            My Projects
            <span className='inline-block align-middle'>
              <HiChevronRight size={28} className='ml-2' />
            </span>
          </button>
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home