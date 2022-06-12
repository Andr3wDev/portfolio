import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <div id="home" name="home">
      <div className="flex flex-col justify-center
        w-full max-w-[1000px] min-h-screen mx-auto 
        px-5 sm:px-7">

        <span className='intro-text text-3xl sm:text-5xl'>
          Hi, I'm Andrew Brown
        </span>
        <h2 className='text-2xl sm:text-4xl my-3'>
          <span className='text-[#071034]'>
            <Typewriter words={["Software Developer"]} 
            typeSpeed={80} deleteSpeed={50} delaySpeed={1500} />
          </span>
        </h2>
        <p className='text-base sm:text-lg mt-7 mb-9 max-w-[700px]'>
          I specialise in creating clean, robust and scalable software.
          Currently, I'm focused on building responsive
          full-stack web applications.
        </p>
        <div>
        <Link to="projects" spy={true} smooth={true}>
          <button className='text-base sm:text-lg home-btn
            shadow-sm hover:bg-[#071034] hover:text-white'>
            My Projects
            <span className='inline-block align-middle'>
              <HiChevronRight size={28} className='ml-2' />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home