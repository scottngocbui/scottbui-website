import React from 'react'

const Navbar = () => {
  return (
    <section className='grid grid-cols-4 mx-[20px] gap-[20px] h-20 md:grid-cols-6 lg:grid-cols-12'>
        <div className='flex flex-row items-center justify-between col-span-4 md:col-span-6 lg:col-span-12 px-8'>
            <div className='text-xl border-2 px-8 py-4 rounded-[16px]'>
              ScottBui.Dev
            </div>
            <ul className='hidden text-xl md:flex md:flex-row'>
              <li className='px-8 py-4'>Hero</li>
              <li className='px-8 py-4'>About Me</li>
              <li className='px-8 py-4'>Skills</li>
              <li className='px-8 py-4'>Projects</li>
              <li className='px-8 py-4'>Contact Me</li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar