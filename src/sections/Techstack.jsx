import React from 'react'
import TittleHeader from '../Components/TittleHeader'
import TechIcons from '../Components/TechIcons'
import { iconslist } from '../constants'

const Techstack = () => {
  return (
    <div className='w-full h-full'>
      <div className=" ">
        <div className="container mx-auto md:p-0 px-3">
            <TittleHeader title={"TECK STACK"} number={"02"} text={"My Go-To Tools for Crafting Solutions"} />
        </div>
        <div className="md:mt-20 mt-10 relative">
         <div className="marquee h-53 border border-red-500">
          <div className="marquee-box md:gap-12 gap-5 marquee-item flex-none">
             {iconslist.map((iconss, i) => (
            <TechIcons key={i} icon={iconss.Icon} name={iconss.name} />
          ))}
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Techstack