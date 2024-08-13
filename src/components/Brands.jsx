import React from 'react'
import { brnad } from '../assets/contents'

const Brands = () => {
  return (
    <div id='brands' className='w-full flex items-center justify-center py-10'>
        {brnad.map((item, index) => (
            <div key={index} className='w-1/2 md:w-1/4 lg:w-1/6 px-5 flex-shrink-0'>
            <img className='w-1/2' src={item} alt="Brand logo" />
          </div>
        ))}
      
    </div>
  )
}

export default Brands
