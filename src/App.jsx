import React from 'react'
import Hero from './components/home/Hero'
import Service from './components/Service'
import NewestCar from './components/NewestCar'



const App = () => {
  
  return (
    <div className='w-screen overflow-x-hidden'>
      <Hero/>
      <Service/>
      <NewestCar/>
    </div>
  )
}

export default App
