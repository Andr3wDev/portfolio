import React from 'react';
import AirbnbImg from '../assets/airbnb.png';
import PropertyImg from '../assets/property.png';
import AmazonImg from '../assets/amazon.png';

import { 
  HiOutlineExternalLink,
  HiOutlineFolderOpen 
} from 'react-icons/hi';

const Projects = () => {
  return (
    <section id="projects" name="projects">
      <div className="flex flex-col items-center w-full mx-auto px-4">

        <div className='max-w-[1000px]'>          
          <h2 className='text-3xl sm:text-5xl'>My Projects</h2>
        </div>

      <div className='wrapper mx-auto grid'>
        <div className='grid-cols-1 sm:grid-cols-2 flex flex-col sm:flex-row'>
          <div className='w-full'>
              <img alt="amazon" src={AirbnbImg} className="mx-auto" />
          </div>
          <div className='w-full flex items-center'>
            <div className='w-full lg:w-3/4'>
                <h6 className="mb-2 text-xl sm:text-2xl relative">Airbnb Clone</h6>
                <span className="text-base sm:text-lg block pt-2 text-grey-20">
                  This project is a clone of the Airbnb Application. Currently a work in progress.
                  It is built using Next.js and React. 
                  The plan is to implement a .NET API in the future.
                </span>
                <div className="content-links mt-5">
                  <a className='mr-3' href="https://airbnb-next.vercel.app/">Demo
                  <HiOutlineExternalLink size={24} className='ml-1' />
                  </a>
                  <a className='ml-3' href="https://github.com/Andr3wDev/Next_Airbnb_React">Code             
                    <HiOutlineFolderOpen size={24} className='ml-1'/>
                  </a>
                </div>
            </div>                     
          </div>          
        </div>

        <div className='grid-cols-1 sm:grid-cols-2 flex flex-col-reverse sm:flex-row'>
          
        <div className='w-full flex items-center'>
          <div className='w-full lg:w-3/4 ml-0 lg:ml-[25%]'>
              <h6 className="mb-2 text-xl sm:text-2xl relative">Property Website</h6>
              <span className="text-base sm:text-lg block pt-2 text-grey-20">
                This project consists of a .NET Core API residing
                 in Azure, and Angular frontend. 
                 Featuring Entity Framework, Unit of Work,
                  Alertify, JWT and more.
              </span>
              <div className="content-links mt-5">
                <a className='mr-3' href="https://angular-property.web.app/">Demo
                <HiOutlineExternalLink size={24} className='ml-1' />
                </a>
                <a className='ml-3' href="https://github.com/Andr3wDev/.Net_Angular_Property">Code             
                  <HiOutlineFolderOpen size={24} className='ml-1'/>
                </a>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <img alt="amazon" src={PropertyImg} className="mx-auto" />
          </div>
        </div>

        <div className='grid-cols-1 sm:grid-cols-2 flex flex-col sm:flex-row'>
          <div className='w-full'>
            <img alt="amazon" src={AmazonImg} className="mx-auto" />
          </div>
          <div className='w-full flex items-center'>
          <div className='w-full lg:w-3/4'>
              <h6 className="mb-2 text-xl sm:text-2xl relative">Amazon Clone</h6>
              <span className="text-base sm:text-lg block pt-2 text-grey-20">
                This project is a clone of the Amazon Web App. It is built
                using Next.js and React hosted on Firebase. 
                It features Stripe payment integration.
              </span>
              <div className="content-links mt-5">
                <a className='mr-3' href="https://ecommerce-1585a.web.app/">Demo
                <HiOutlineExternalLink size={24} className='ml-1' />
                </a>
                <a className='ml-3' href="https://github.com/Andr3wDev/React_Next_Ecommerce">Code             
                  <HiOutlineFolderOpen size={24} className='ml-1'/>
                </a>
              </div>
            </div>
          </div>          
        </div>
      </div>
      </div>
    </section>
  )
}

export default Projects