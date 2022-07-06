import React from 'react'

const About = () => {
  return (
    <div id="about" name='about'>
      <div className="flex flex-col pt-[15vh]
        w-full max-w-[1000px] items-center h-screen mx-auto px-4">
        <div className='max-w-[700px]'>
          <h2 className='text-3xl sm:text-5xl'>About Me</h2>
          <p className='text-base sm:text-lg mt-7'>I am passionate about building excellent Software and creating
            solutions that improve peoples lives.
          </p>
          <br/>
          <p className='text-base sm:text-lg'>I specialize in creating Applications
            for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations.
          </p> 
        </div>
      </div>
    </div>
  )
}

export default About