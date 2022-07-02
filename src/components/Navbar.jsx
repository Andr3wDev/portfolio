import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { 
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin 
} from 'react-icons/fa';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const sendMail = (e) => {
    e.preventDefault();
    const mailto =
      "mailto:mail@gmail.com";
      window.location.href = mailto;
  }

  return (
    <div className='light fixed w-full h-[72px] flex justify-evenly
      items-center bg-[#26293a] z-50 align-middle shadow-sm'>
      
      <div className='flex'>
        <NavLink className='navbar-letters light-font text-lg' to="/">
          {'<Andrew />'}</NavLink>
      </div>
      
      <ul id='nav-menu' className='light-font hidden md:flex text-base'>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
        <li><NavLink to="about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink></li>
        <li><NavLink to="tech" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Tech</NavLink></li>
        <li><NavLink to="projects" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Projects</NavLink></li>
      </ul>

      <ul className="flex light-font">
        <li>
          <a href="https://github.com/Andr3wDev?tab=repositories">
            <FaGithub size={24} /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andrew-b-/">
            <FaLinkedin size={24} /></a>
        </li>
        <li>
          <HiOutlineMail size={24} />
          <div className="hidden submenu">
            29abrown@gmail.com
          </div>
        </li>
      </ul>    

      <div onClick={handleClick} className='light-font md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
      </div>
           
      <ul className={!nav ? 'hidden' 
        : 'absolute top-0 left-0 w-full h-screen bg-[#26293a] light-font flex flex-col justify-center items-center'}>          
          <li className='py-5 text-4xl'>
            <NavLink onClick={handleClick} to="home">
            Home</NavLink></li>
          <li className='py-5 text-4xl'>
            <NavLink onClick={handleClick} to="about">
            About</NavLink></li>
          <li className='py-5 text-4xl'>
            <NavLink onClick={handleClick} to="tech">
            Tech</NavLink></li>
          <li className='py-5 text-4xl'>
            <NavLink onClick={handleClick} to="projects">
            Projects</NavLink></li>
          <li className='py-5'> 
            <div className='flex mx-auto'>
                <a href="https://github.com/Andr3wDev?tab=repositories" 
                className="social-nav text-base sm:text-lg">
                  <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/andrew-b-/" 
                className="social-nav text-base sm:text-lg">
                  <FaLinkedin size={30} />
                </a>
                <a target="_top" href="mailto:29abrown@gmail.com" 
                className="social-nav text-base sm:text-lg">
                  <HiOutlineMail size={30} />
                </a>
            </div>
          </li>
      </ul>

      </div>
  )
}

export default Navbar