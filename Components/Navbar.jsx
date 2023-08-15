import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Logo from '../public/Images/tecnm.png'
import Image from 'next/image';

const Navbar = () => {

  const router = useRouter();
  
  
  
  
  return (
    <>
      <header
        id="landing-header"
        className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"
      >
        <div className="flex ml-14 cursor-pointer w-[156px]" onClick={e => router.push("/")}>
          <Image className='w-full ' src={Logo} alt="Logo"/>
        </div>
        <nav className = 'flex flex-col  w-full items-end '>
          <ul className = ' flex justify-between w-[70%] pr-10 text-lg [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
            <li><Link href='/#Portada'>Inicio</Link></li>
            <li><Link href='/#VR'>VR</Link></li>
            <li><Link href='/#Presencia'>Presencia</Link></li>
            <li><Link href='/'>Ventajas</Link></li>
            <li><Link href='/#Futuras'>Futuro</Link></li>
            <li><Link href='/'>Trastornos</Link></li>
            <li><Link href='/'>Encuesta</Link></li>
            <li><Link href='/#Conclusion'>Conclusion</Link></li>
            <li><Link href='/#Referencias'>Referencias</Link></li>
          </ul>
        </nav>
        <div
          id="menu-backdrop"
          className={`
            absolute bg-white/10 backdrop-blur-lg rounded
            translate-x-[var(--left)] translate-y-[var(--top)]
            left-0 top-0
            w-[var(--width)] h-[var(--height)]
            transition-all duration-500
            ease-in-out opacity-0 -z-10
          `}
        >
        </div>
      </header>
    </>
  )
}

export default Navbar