import React from 'react'
import {img6} from '../../assets/img-food/'
import { useGlobalContext } from './context'

const Hero = () => {
    const {closeSubmenu} = useGlobalContext()
      
  return (
    <section className="hero">
      <div className="hero-center">
        <article></article>
        <article className="hero-images">
          <img src={img6} alt="" />
        </article>
      </div>
    </section>
  );
}

export default Hero
