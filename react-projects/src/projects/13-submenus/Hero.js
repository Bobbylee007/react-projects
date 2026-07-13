import React from 'react'
import img6 from '../../assets/img-food/'
import { useGlobalContext } from './context'

const Hero = () => {
    const data = useGlobalContext()
    console.log(data);
    
  return (
    <h2>
      hero component
    </h2>
  )
}

export default Hero
