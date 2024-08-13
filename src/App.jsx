import React from 'react'
import Hero from './components/home/Hero'
import Service from './components/Service'
import NewestCar from './components/NewestCar'
import FeatureCar from './components/FeatureCar'
import ClientSay from './components/ClientSay'


const App = () => {
  
  return (
    <div className='w-screen overflow-x-hidden text-gray-200 bg-gray-800'>
      <Hero/>
      <Service/>
      <NewestCar/>
      <FeatureCar/>
      <ClientSay/>
    </div>
  )
}

export default App
