import React from 'react'
import arrow from '../../public/Icons img/arrow.svg'
import circle from '../../public/Icons img/circle.svg'
import GradientSphere from '../Components/GradiantSphere'
function Hero() {
  return (
<section className=' text-white-50 h-dvh relative px-5'>

    <GradientSphere sphere1class={"gradient-sphere sphere-1"} sphere2class={"gradient-sphere sphere-2"} />

    <div className='w-full h-full flex-center'>
        <div className='container relative w-full h-full '>
            <div className='md:mt-40 mt-20'>
                <p className='font-medium md:text-2xl text-base'>👋hey im here</p>
                <h1 className="font-bold md:text-8xl text-6xl">MOHD SAKIB KHAN</h1>
                <h1 className="font-bold md:text-8xl text-5xl">CREATIVE</h1>
            </div>

            <div className="absolute w-full z-30 bottom-20 right-0">
                <div className="flex justify-between items-end">
                    <div className='flex flex-col items-center md:gap-5 gap-1'>
                        <p className='md:text-base text-sm'>Explore</p>
                        <img src={arrow} className='size-7 animate-bounce' alt="arrow down" />
                    </div>
                    <div className='flex flex-col items-end'>
                        <img src={circle} className='w-20 h-20' alt="" />
                        <h1 className="font-extrabold md:text-8xl mt-5 text-5xl">DEVELOPER</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>  
)
}

export default Hero
