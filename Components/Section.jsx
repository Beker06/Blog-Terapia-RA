import React from 'react'

const Section = ({color, bg, id, children}) => {
    const textColor = `text-${color}`
  return (
    <section
        className="landing-section bg-black h-screen w-screen text-center overflow-hidden relative"
        data-header-color={color}
        id={id}
    >
        {children}
    </section>
  )
}

export default Section