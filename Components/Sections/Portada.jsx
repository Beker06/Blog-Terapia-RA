import React from 'react'
import Section from '../Section'

const Portada = () => {
  
  return (
    <Section id="Portada" color="white">
      <video
        slot='background'
        className="object-center object-cover h-full w-full"
        autoPlay
        muted
        loop
        src="/Videos/smoke.webm">
      </video>
    </Section>
  )
}

export default Portada