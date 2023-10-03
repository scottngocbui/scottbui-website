import React from 'react'

const Navbar = () => {
  return (
    <section className='grid grid-cols-4 mx-[20px] gap-[20px] h-20 md:grid-cols-6 lg:grid-cols-12'>
        <div className='flex flex-row items-center justify-between col-span-4 md:col-span-6 lg:col-span-12 px-8'>
            <p>ScottBui.Dev</p>
        </div>
    </section>
  )
}

export default Navbar