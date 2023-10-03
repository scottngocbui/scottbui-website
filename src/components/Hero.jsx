import React from 'react'

const Hero = () => {
  return (
    <section className='grid grid-cols-4 mx-[20px] gap-[20px] md:grid-cols-6 lg:grid-cols-12 place-items-center h-screen'>
        <div className='grid text-5xl col-span-4 md:col-span-6 lg:col-span-12'>Hi, My name is</div>
        <div className='grid text-5xl col-span-4 md:col-span-6 lg:col-span-12'>Scott Bui</div>
    </section>
  )
}

export default Hero