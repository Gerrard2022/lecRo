import React from 'react'
import { socials } from '../constants'

const Footer = () => {
  return (
    <div className='container flex justify-between items-center'>
<div className='flex items-center justify-between'>
<a className="flex-1 cursor-pointer z-2" href='/'>
     <img src="/images/lecRo.svg" width={200} height={55} alt="logo" />
     <h1 className="mb-6 text-p4 h6 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-xl max-md:leading-12">
              Step into the Future.
            </h1>
</a>
</div>

<div className='flex items-center justify-between'>
    <ul className='flex flex-col gap-4 m-10'>
        {socials.map((item)=>(
            <li key={item.id} >
                <a href={item.url} target="_blank" className='flex flex-row gap-3 '>
                <img src={item.icon} alt={item.title} />
                <h5 className='text-white font-semibold'>{item.title}</h5>
                </a>
            </li>
        ))}
    </ul>
</div>
    </div>
  )
}

export default Footer