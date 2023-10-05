import React from 'react'
import {ImMobile} from 'react-icons/im'
import {HiOutlineComputerDesktop} from 'react-icons/hi2'
import {BiLogoReact} from 'react-icons/bi'
import {MdSecurity} from 'react-icons/md'

const AboutMe = () => {
  return (
    <div className='flex flex-col p-10 lg:p-20'>
      <div className='flex font-semibold text-5xl mb-16 justify-left text-white'>
        About Me
      </div>
      <div className='text-xl'>
        My name is Scott and I am a self-taught Front-End Developer/Designer from Philadelphia, PA. My interest in web development stemmed from my involvement in Web3 and I am looking to improve and hone my skills to create meaningful and impactful components that will benefit the Web3 Space and Community. 
      </div>
      <div className='flex font-semibold text-5xl mt-16 mb-16 justify-left text-white'>
        Skills
      </div>
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
            <div className='text-2xl text-white'>React Specialist</div>
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
  )
}

export default AboutMe