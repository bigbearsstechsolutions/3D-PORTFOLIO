import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import GradientSphere from '../Components/GradiantSphere'
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook, FaHtml5, FaCss3, FaReact, FaAws } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiNodedotjs, SiTypescript, SiThreedotjs, SiGsap } from 'react-icons/si'
import arrow from '../../public/Icons img/arrow.svg'
import TittleHeader from '../Components/TittleHeader'
import multi from '../../public/Icons img/coding1.svg'
import { Alien } from '../../public/models/Alien'
import { bentoSocialLinks } from '../constants'
import { icons } from 'lucide-react'



function About() {

  return (
    <section id='about' className='flex-center relative md:p-5 border-red-500 border px-5'>
      <GradientSphere sphere1class={"about-gradient-sphere sphere-1"} sphere2class={"about-gradient-sphere sphere-2"} />
      <div className='container w-full h-full md:my-30 my-18 relative z-10'>
        <TittleHeader title={"About me"} text={"Passionate Creator, Lifelong Learner"} number={'01'} />


        <div className="md:mt-20 mt-10">
          <div className='grid grid-cols-12 md:grid-rows-12 gap-5'>
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl pl-10 pt-2 w-full h-full">
                <div className="">
                  <img src={multi} className='w-16 h-14 md:w-25' alt="code" />
                </div>
                <div className="mt-3">
                  <h1 className='text-blue-50 md:text-5xl text-2xl'>Sakib</h1>
                  <p className='md:text-2xl text-sm mt-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad aut, cumque facilis tempore unde numquam repudiandae fuga, repellat eius, quisquam soluta! Sapiente velit dicta cum laudantium ducimus, provident vero impedit?
                  </p>
                </div>
              </div>
            </div>
            <div className='md:col-span-5 col-span-12 row-span-5'>
              <div className='bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60 '>
                <div className="w-full h-full">
                  {/* animation adds snippet */}
                  <Canvas>
                    <OrbitControls />
                    <Alien scale={2} position={[0, -5.5, 0]} rotation={[0, -0.5, 0]} />
                  </Canvas>
                </div>
              </div>
            </div>
            {/* web design cars{} */}

            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div className='flex flex-col h-full justify-center'>{ }
                  <h1 className='gradient-title md:text-2xl text-xl font-bold'>Web Design & Dev</h1>
                  <p className='md:text-xl max-w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, accusamus ipsa temporibus soluta obcaecati ab.</p>
                </div>
              </div>
            </div>
            {/* web design cars{} */}

            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div className='flex flex-col h-full justify-center'>{ }
                  <h1 className='gradient-title md:text-2xl text-xl font-bold'>Web Design & Dev</h1>
                  <p className='md:text-xl max-w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, accusamus ipsa temporibus soluta obcaecati ab.</p>
                </div>
              </div>
            </div>
            {/* web design cars{} */}

            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div className="flex flex-col justify-between h-full">{["BE YOURSELF", "BE DIFRENT", "BUILD DIFFRENT"].map((text, indez) => (
                  <h1 key={indez} className='gradient-title md:text-3xl  text-2xl font-bold'>{text}</h1>
                ))}</div>
              </div>
            </div>
            {/* brnto social inks */}
            {bentoSocialLinks.map((item, index) => {
              const Icon = item.Icon
              return (
                <div key={index} className='md:col-span-4 col-span-12 row-span-2'>
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                    <div className="">
                      <Icon size={40} />
                      <h1>{item.name}</h1>
                    </div>
                    <div className="">
                      <img src={arrow} className='size-7 animate-bounce' alt="arrow down" />

                    </div>
                  </div>
                </div>
              )
            })
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
