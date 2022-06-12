import React from 'react';
import AirbnbImg from '../assets/airbnb.png';
import PropertyImg from '../assets/property.png';
import AmazonImg from '../assets/amazon.png';
import AngularImg from '../assets/angular.png';
import DotNetImg from '../assets/dotnet.png';
import ReactImg from '../assets/react.png';
import NextImg from '../assets/next.png';

import { 
  HiOutlineExternalLink,
  HiOutlineFolderOpen 
} from 'react-icons/hi';

const Projects = () => {
  return (
    <section id="projects" name="projects">
      <div className="flex flex-col
            items-center w-full mx-auto px-4">
              
        <div className='section-title text-center'>
          <h2 className='text-black'>My Projects</h2>         
          <p className='text-base sm:text-lg'>Check out some of my recent Projects.</p>        
        </div>

      <div className='wrapper mx-auto grid w-full lg:w-[80%]'>
        <div className='grid-cols-1 sm:grid-cols-2 flex flex-col sm:flex-row'>
          <div className='w-full'>
              <img alt="amazon" src={AirbnbImg} className="mx-auto" />
          </div>
          <div className='w-full flex items-center'>
            <div className='intro bg-white p-5 w-full lg:w-3/4'>
                <h6 className="mb-2 text-xl sm:text-2xl relative">Airbnb Clone</h6>
                <span className="text-base sm:text-lg block pt-2 text-grey-20">
                  This project is a clone of the Airbnb Web App. This is currently a work in progress.
                  It is built using Next.js and React. 
                  The plan is to implement a .NET API once completed.
                </span>
                <div className="content-links mt-5">
                  <img src={ReactImg} className="h-10 mr-2" alt="" />
                  <img src={NextImg} className="h-10" alt="" />
                </div>
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
          <div className='intro bg-white p-5 w-full lg:w-3/4 ml-0 lg:ml-[25%]'>
              <h6 className="mb-2 text-xl sm:text-2xl relative">Property Website</h6>
              <span className="text-base sm:text-lg block pt-2 text-grey-20">
                This project is hosted on Firebase and the .NET Core backend
                resides in Azure. Featuring Entity Framework, SQL, Unit of Work,
                Alertify, Cloudinary and JWT Auth.
              </span>
              <div className="content-links mt-5">
                <img src={AngularImg} className="h-10 mr-2" alt="" />
                <img src={DotNetImg} className="h-10" alt="" />
              </div>
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
          <div className='intro bg-white p-5 w-full lg:w-3/4'>
              <h6 className="mb-2 text-xl sm:text-2xl relative">Amazon Clone</h6>
              <span className="text-base sm:text-lg block pt-2 text-grey-20">
                This project is a clone of the Amazon Web App. It is built
                using Next.js and React. It has a fully functional payment system
                using Stripe. It uses a Firebase backend.
              </span>
              <div className="content-links mt-5">
                <img src={ReactImg} className="h-10 mr-2" alt="" />
                <img src={NextImg} className="h-10" alt="" />
              </div>
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