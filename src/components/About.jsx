import React from 'react'

const About = () => {
  return (
    <section id="about" name='about'>

      <div className="flex flex-col
            items-center w-full min-h-screen mx-auto px-4">

        <div className='max-w-[600px] w-full gap-8'>
          <div className='section-title text-center'>
            <h2 className='text-black'>About Me</h2>         
            <p className='text-base sm:text-lg'>Why Software Development?</p>        
          </div>
        </div>            
        <div className='max-w-[600px] w-full gap-8'>
            <p className='text-base sm:text-lg'>I am passionate about building excellent Software and creating
              solutions that improve peoples lives.
            </p>
            <br/>
            <p className='text-base sm:text-lg'>I specialize in creating Applications
                for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations.
            </p> 
        </div>
      </div>
    </section>
  )
}

export default About