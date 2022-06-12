import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { 
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin 
} from 'react-icons/fa';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[72px] flex justify-around
      items-center px-4 bg-[#fff] z-50'>
      <div>
        <Link className='navbar-letters' to="home" spy={true} smooth={true}>
          AB</Link>
      </div>
      <ul id='nav-menu' className='hidden md:flex text-base'>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home</Link></li>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            About</Link></li>
        <li>
          <Link activeClass="active" to="skills" spy={true} smooth={true}>
            Skills</Link></li>
        <li>
          <Link activeClass="active"to="projects" spy={true} smooth={true}>
            Projects</Link></li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
      </div>
           
      <ul className={!nav ? 'hidden' 
        : 'absolute top-0 left-0 w-full h-screen bg-[#fdfdfd] flex flex-col justify-center items-center'}>
          
          <li className='py-5 text-4xl'>
            <Link onClick={handleClick} to="home" spy={true} smooth={true}>
            Home</Link></li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleClick} to="about" spy={true} smooth={true}>
            About</Link></li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleClick} to="skills" spy={true} smooth={true}>
            Skills</Link></li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleClick} to="projects" spy={true} smooth={true}>
            Projects</Link></li>
          <li className='pt-5'> 
            <div className='flex mx-auto'>
                <a href="https://github.com/Andr3wDev?tab=repositories" 
                className="social-nav text-base sm:text-lg">
                  <FaGithub className='text-[#071034]' size={30} />
                </a>
                <a href="https://www.linkedin.com/in/andrew-b-/" 
                className="social-nav text-base sm:text-lg">
                  <FaLinkedin className='text-[#071034]' size={30} />
                </a>
                <a target="_top" href="mailto:29abrown@gmail.com" 
                className="social-nav text-base sm:text-lg">
                  <HiOutlineMail className='text-[#071034]' size={30} />
                </a>
            </div>
          </li>
      </ul>
      
      <div className="social-fixed hidden fixed lg:flex flex-col lg:right-[20px]">
        <a href="https://github.com/Andr3wDev?tab=repositories" className="social">
          <FaGithub className='text-[#071034]' size={30} />
          <span className='text-base sm:text-lg font-medium'>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/andrew-b-/" className="social">
          <FaLinkedin className='text-[#071034]' size={30} />
          <span className='text-base sm:text-lg font-medium'>LinkedIn</span>
        </a>
        <a target="_top" href="mailto:29abrown@gmail.com" className="social">
          <HiOutlineMail className='text-[#071034]' size={30} />
          <span className='text-base sm:text-lg font-medium'>Email</span>
        </a>
      </div>
    </div>
  )
}

export default Navbar