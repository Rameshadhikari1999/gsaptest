import React from 'react'

const SectionHeader = ({title, subTitle}) => {
  return (
    <div className='w-full'>
        <p className='text-center text-sm capitalize tracking-wide font-gupter'>{subTitle}</p>
        <h1 className='text-center text-3xl uppercase tracking-widest font-gupter font-bold my-2 py-2 after:content-[""] after:block after:h-[2px] after:w-[100px] after:bg-[#2947c0] after:mx-auto after:mt-5 '>{title}</h1>
      </div>
  )
}

export default SectionHeader
