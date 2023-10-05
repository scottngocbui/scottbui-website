import React from 'react'
import {BsPersonVcard, BsFolder, BsChatLeftText, BsGithub, BsPhone, BsDownload} from 'react-icons/bs'
import {BiLogoLinkedin} from 'react-icons/bi'
import {FaFigma, FaBirthdayCake} from 'react-icons/fa'
import {IoLocationOutline} from 'react-icons/io5'
import {MdOutlineEmail} from 'react-icons/md'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import ContactMe from './components/ContactMe'
import Me from './assets/me1.png'

const App = () => {
  return (
    <div className='bg-mamba bg-dgray min-h-screen text-pblue font-poppins'>
      <div className='grid grid-cols-4 mx-[20px] md:grid-cols-8 lg:grid-cols-12 gap-[20px] md:mx-[70px] pt-20'>
        <div className='bg-rblack col-span-4 h-[775px] rounded-[16px] mt-20'>
          <div className='flex flex-col items-center'>
            <img src={Me} alt='Me' className='w-[200px] -mt-[50px] bg-gray rounded-lg'/>
            <div className='text-5xl my-2'>Scott Bui</div>
            <div className='text-2xl bg-gray my-2 p-2 rounded-lg text-white'>Front-End Developer</div>
            <div className='flex flex-row my-2'>
              <div className='mx-2 p-2 bg-gray rounded-lg cursor-pointer hover:bg-blue hover:text-gray transition ease'><BiLogoLinkedin size='20'/></div>
              <div className='mx-2 p-2 bg-gray rounded-lg cursor-pointer hover:bg-blue hover:text-gray transition ease'><BsGithub size='20'/></div>
              <div className='mx-2 p-2 bg-gray rounded-lg cursor-pointer hover:bg-blue hover:text-gray transition ease'><FaFigma size='20'/></div>
              <div></div>
            </div>
            <div className='grid grid-cols-1 divide-y border-2 py-2 px-4 lg:px-8 rounded-lg my-2'>
              <div className='flex items-center pb-2'>
                <span className='p-2 bg-gray rounded-lg mr-4'><BsPhone size='30'/></span>
                <div className='flex flex-col justify-center items-left'>
                  <p>Phone</p>
                  <p>267-968-0320</p>
                </div>
              </div>
              <div className='flex items-center py-2'>
                <span className='p-2 bg-gray rounded-lg mr-4'><IoLocationOutline size='30'/></span>
                <div className='flex flex-col justify-center items-left'>
                  <p>Location</p>
                  <p>Philadelphia, PA</p>
                </div>
              </div>
              <div className='flex items-center py-2'>
                <span className='p-2 bg-gray rounded-lg mr-4'><MdOutlineEmail size='30'/></span>
                <div className='flex flex-col justify-center items-left'>
                  <p>Email</p>
                  <p>scottngocbui@gmail.com</p>
                </div>
              </div>
              <div className='flex items-center py-2'>
                <span className='p-2 bg-gray rounded-lg mr-4'><FaBirthdayCake size='30'/></span>
                <div className='flex flex-col justify-center items-left'>
                  <p>Birthday</p>
                  <p>September 27, 1995</p>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <a target='_blank' rel='noopener noreferrer' className="cursor-pointer reg-text relative flex shrink items-center justify-center p-4 px-6 py-3 overflow-hidden transition duration-300 ease-out border-2 rounded-[16px] group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                      <BsDownload size={24}/>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Download CV</span>
                  <span className="relative invisible">Download CV</span>
              </a>
            </div>
          </div>
        </div>
        <div className='flex bg-rblack col-span-4 md:col-end-9 lg:col-end-13 lg:col-span-5 h-[150px] rounded-[16px] md:mt-20 justify-center items-center'>
          <div className='flex flex-row justify-center'>
            <div className='bg-blue text-gray flex flex-col items-center justify-center w-[100px] py-2 mx-2 border-2 rounded-lg'>
              <span className=''><BsPersonVcard size="40"/></span>
              <span className="relative">About Me</span>
            </div>
            <div className='flex flex-col items-center justify-center w-[100px] py-2 mx-2 border-2 rounded-lg cursor-pointer hover:bg-blue hover:text-gray transition ease'>
              <span className=''><BsFolder size="40"/></span>
              <span className="relative">Experience</span>
            </div>
            <div className='flex flex-col items-center justify-center w-[100px] py-2 mx-2 border-2 rounded-lg cursor-pointer hover:bg-blue hover:text-gray transition ease'>
              <span className=''><BsChatLeftText size="40"/></span>
              <span className="relative">Contact</span>
            </div>
          </div>
        </div>
        <div className='bg-rblack col-span-4 md:col-end-9 lg:col-end-13 lg:col-span-8 md:-mt-[625px] min-h-full rounded-[16px]'>
          <AboutMe/>
          <Experience/>
          <ContactMe />
        </div>
      </div>
    </div>
  )
}

export default App