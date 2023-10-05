import React from 'react'
import {BsPersonVcard, BsFolder, BsChatLeftText, BsGithub, BsPhone, BsDownload} from 'react-icons/bs'
import {BiLogoLinkedin, BiLogoReact} from 'react-icons/bi'
import {FaFigma, FaBirthdayCake} from 'react-icons/fa'
import {IoLocationOutline} from 'react-icons/io5'
import {MdOutlineEmail, MdSecurity} from 'react-icons/md'
import {ImMobile} from 'react-icons/im'
import {HiOutlineComputerDesktop} from 'react-icons/hi2'
import Me from './assets/me1.png'

const App = () => {
  return (
    <div className='bg-mamba bg-dgray min-h-screen text-pblue font-poppins'>
      <div className='grid grid-cols-4 mx-[20px] md:grid-cols-8 lg:grid-cols-12 gap-[20px] md:mx-[70px]'>
        <div className='bg-rblack col-span-4 h-[775px] rounded-[16px] mt-20'>
          <div className='flex flex-col items-center'>
            <img src={Me} alt='Me' className='w-[200px] -mt-[50px] bg-gray rounded-lg'/>
            <div className='text-5xl my-2'>Scott Bui</div>
            <div className='text-2xl bg-gray my-2 p-2 rounded-lg text-white'>Front-End Developer</div>
            <div className='flex flex-row my-2'>
              <div className='mx-2 p-2 bg-gray rounded-lg'><BiLogoLinkedin size='20'/></div>
              <div className='mx-2 p-2 bg-gray rounded-lg'><BsGithub size='20'/></div>
              <div className='mx-2 p-2 bg-gray rounded-lg'><FaFigma size='20'/></div>
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
              <a target='_blank' rel='noopener noreferrer' className="reg-text relative flex shrink items-center justify-center p-4 px-6 py-3 overflow-hidden transition duration-300 ease-out border-2 rounded-[16px] group">
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
            <div className='bg-blue flex flex-col items-center justify-center w-[100px] py-2 mx-2 border-2 rounded-lg'>
              <span className=''><BsPersonVcard size="40"/></span>
              <span className="relative">About Me</span>
            </div>
            <div className='flex flex-col items-center justify-center w-[100px] py-2 mx-2 border-2 rounded-lg'>
              <span className=''><BsFolder size="40"/></span>
              <span className="relative">Projects</span>
            </div>
            <div className='flex flex-col items-center justify-center w-[100px] py-2 mx-2 border-2 rounded-lg'>
              <span className=''><BsChatLeftText size="40"/></span>
              <span className="relative">Contact Me</span>
            </div>
          </div>
        </div>
        <div className='bg-rblack col-span-4 md:col-end-9 lg:col-end-13 lg:col-span-8 md:-mt-[625px] min-h-full rounded-[16px]'>
          <div className='flex flex-col p-10 lg:p-20'>
            <div className='flex font-semibold text-5xl mb-16 justify-left text-white'>About Me</div>
            <div className='text-xl'>My name is Scott and I am a self-taught Front-End Developer/Designer from Philadelphia, PA. My interest in web development stemmed from my involvement in Web3 and I am looking to improve and hone my skills to create meaningful and impactful components that will benefit the Web3 Space and Community. </div>
            <div className='flex font-semibold text-5xl mt-16 mb-16 justify-left text-white'>Skills</div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-8'>
              <div className='flex flex-row p-4 lg:p-8 border-2 rounded-lg lg:mr-4 bg-gray'>
                <span className='pr-4 text-rblack'><ImMobile size='40'/></span>
                <div>
                  <div className='text-2xl text-white'>Responsive Websites</div>
                  <div className='text-md'>With my advanced understanding of HTML and CSS, I am capable of creating exceptionally responsive websites optimized for viewing on mobile devices, tablets, and desktop computers.</div>
                </div>
              </div>
              <div className='flex flex-row p-4 lg:p-8 border-2 rounded-lg mt-8 lg:ml-4 lg:mt-0 bg-gray'>
                <span className='pr-4 text-rblack'><HiOutlineComputerDesktop size='40'/></span>
                <div>
                  <div className='text-2xl text-white'>Figma-to-Website</div>
                  <div className='text-md'>High-level prototyping of a website through Figma can help stakeholders and developers come to the same page. I have the skills to be part of the process from scratch to completion.</div>
                </div>
              </div>
              <div className='flex flex-row p-4 lg:p-8 border-2 rounded-lg mt-8 lg:mr-4 bg-gray'>
                <span className='pr-4 text-rblack'><BiLogoReact size='40'/></span>
                <div>
                  <div className='text-2xl text-white'>ReactJS Specialist</div>
                  <div className='text-md'>React is renowned for its component-based architecture and its utilization of the Virtual Document Object Model (DOM), both of which I am proficient in.</div>
                </div>
              </div>
              <div className='flex flex-row p-4 lg:p-8 border-2 rounded-lg mt-8 lg:ml-4 bg-gray'>
                <span className='pr-4 text-rblack'><MdSecurity size='40'/></span>
                <div>
                  <div className='text-2xl text-white'>Security-Based Background</div>
                  <div className='text-md'>Having earned my Bachelor's degree in Computing and Security Technology from Drexel University, I possess a deep dedication to security.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App