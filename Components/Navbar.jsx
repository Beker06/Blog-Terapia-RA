import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Logo from '../public/Images/tecnm.png'
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();

  useEffect(() =>{
    const headerEl = document.querySelector("#landing-header");

    const observerOptions = {
      root: null,
      rootMargin: "0px", // en cuanto se vea el elemento
      threshold: 0.9, // porcentaje de visibilidad
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry
        if (isIntersecting) {
          const color = entry.target.getAttribute("data-header-color")
          headerEl.style.color = color
        }
      })
    }, observerOptions)

    const sectionElements = document.querySelectorAll(".landing-section")
    sectionElements.forEach((section) => observer.observe(section))
  }, [])
  
  return (
    <>
      <header
        id="landing-header"
        className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"
      >
        <div className="flex ml-14 cursor-pointer w-[156px]" onClick={e => router.push("/")}>
          <Image className='w-full ' src={Logo} alt="Logo"/>
        </div>
        <nav></nav>
      </header>
      
    </>
    

    
  )
}

export default Navbar