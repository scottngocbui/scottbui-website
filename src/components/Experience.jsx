import React from 'react'
import { FaGlobe } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import SkyeGee from '../assets/azukipxn.png'

const Experience = () => {
  return (
    <div className='flex flex-col p-10 lg:p-20'>
      <div className='flex font-semibold text-5xl mb-16 justify-left text-white'>
        Projects
      </div>
      <div className='flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left lg:flex-row p-4 lg:p-8 border-2 rounded-lg bg-gray'>
        <img src={SkyeGee} alt='SkyeGee PFP' className='w-[200px] h-[200px] rounded-lg mb-4 lg:mr-8' />
        <div className='bg-rblack border rounded-lg p-4'>
          <div className='text-2xl text-white mb-4'>SkyeGee.com</div>
          <div className='pb-4'>Website for my Web3 Persona</div>
          <div className='pb-4'>Place to showcase my projects in Web Development, Web3, and Content Creation.</div>
          <div className='flex flex-row justify-center lg:justify-start gap-4 mb-4'>
            <a href="https://github.com/SkyeGeeDev/odin-landing-page" target='_blank' rel='noopener noreferrer' className='p-2 bg-gray rounded-lg cursor-pointer hover:bg-blue hover:text-gray transition ease'><BsGithub size='20'/></a>
            <a href="https://www.skyegee.com" target='_blank' rel='noopener noreferrer' className='p-2 bg-gray rounded-lg cursor-pointer hover:bg-blue hover:text-gray transition ease'><FaGlobe size='20'/></a>
          </div>
        </div>
        <div>
          <div className='text-2xl text-white mb-4 mt-4 lg:mt-0 lg:ml-8'>Skills used:</div>
          <div className='flex flex-wrap w-full lg:ml-8 gap-2 justify-center lg:justify-start'>
            <div className='py-2 px-4 border bg-rblack rounded-lg'>JavaScript</div>
            <div className='py-2 px-4 border bg-rblack rounded-lg'>React</div>
            <div className='py-2 px-4 border bg-rblack rounded-lg'>HTML</div>
            <div className='py-2 px-4 border bg-rblack rounded-lg'>TailWindCSS</div>
            <div className='py-2 px-4 border bg-rblack rounded-lg'>Formik</div>
            <div className='py-2 px-4 border bg-rblack rounded-lg'>Yup</div>
            <div className='py-2 px-4 border bg-rblack rounded-lg'>React-Hot-Toast</div>
            <div className='py-2 px-4 border bg-rblack rounded-lg'>NextJS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience