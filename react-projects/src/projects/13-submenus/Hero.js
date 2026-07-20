import React from 'react'
import {img6} from '../../assets/img-food/'
import { useGlobalContext } from './context'

const Hero = () => {
    const {closeSubmenu} = useGlobalContext()
      
  return (
    <>
        <section className="hero">
      <div className="hero-center">
        <article className='hero-info'>
          <h2>Payments infrastructure for the internet</h2>
          <p>
              Millions of companies of all sizes-from startup to fortune 
              500s-use Strip's sofetware and APIs toaccept payments, send payouys, and manage their businesses online
         </p>
         <button className='btn'>start now</button>
        </article>
        <article className="hero-images">
          <img src={img6} alt="" />
        </article>
      </div>
    </section>
    </>
  )

}

export default Hero
