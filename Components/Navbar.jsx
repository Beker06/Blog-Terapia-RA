import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'
import Logo from '../public/Images/tecnm.png'
import Image from 'next/image';
import { AiOutlineMenu } from "react-icons/ai";
import { useNavModal } from '@/hooks/modals/useNavModal';

const Navbar = () => {

  const router = useRouter();
  const navModal = useNavModal();

  const onToggle = useCallback(() => {
    if(navModal.isOpen == true){
      navModal.onClose();
    }else{
      navModal.onOpen();
    }
    console.log(navModal.isOpen, "toggle")
  }, [navModal])

  console.log(navModal.isOpen, "inicio")
  

  return (
    <>
      <header
        id="landing-header"
        className="py-3 lg:px-10 px-5 flex items-center fixed top-0 w-full lg:justify-between md:justify-center justify-end z-40 text-white"
      >
        <div className="lg:flex hidden ml-14 cursor-pointer w-[156px]" onClick={e => router.push("/")}>
          <Image className='w-full ' src={Logo} alt="Logo"/>
        </div>
        <div 
          onClick={onToggle}
          className="
            md:hidden 
            flex
            md:py-1
            md:px-2
            p-2
            z-20
            items-center 
            rounded-full 
            cursor-pointer 
            mr-5
            hover:bg-gray-700
            transition
            ease-in-out
            duration-300
          "
        >
          <AiOutlineMenu  className='h-7 w-7'/>
        </div>
        <nav className ='md:flex hidden flex-col w-auto items-end '>
          <ul className ='flex justify-between w-full lg:pr-10 pr-0 text-lg [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
            <li><Link href='/#Portada'>Inicio</Link></li>
            <li><Link href='/#VR'>VR</Link></li>
            <li><Link href='/#Presencia'>Presencia</Link></li>
            <li><Link href='/#Ventajas'>Ventajas</Link></li>
            <li><Link href='/#Futuras'>Futuro</Link></li>
            <li><Link href='/#Trastornos'>Trastornos</Link></li>
            {/* <li><Link href='/'>Encuesta</Link></li> */}
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
            md:flex hidden
          `}
        >
        </div>
        <div className={`
            translate
            bg-[#01111E] 
            fixed top-0 left-0 z-10  
            h-full
            w-full 
            flex 
            flex-col 
            outline-none 
            duration-300
            ${navModal.isOpen ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          <div className="flex py-16">
            <ul className='flex flex-col w-full'>
              <Link href='/#Portada'><li className='flex w-full h-14 justify-center items-center shadow-sm shadow-gray-200/25 cursor-pointer hover:bg-slate-800' onClick={onToggle}>Inicio</li></Link>
              <Link href='/#VR'><li className='flex w-full h-14 justify-center items-center shadow-sm shadow-gray-200/25 cursor-pointer hover:bg-slate-800' onClick={onToggle}>VR</li></Link>
              <Link href='/#Presencia'><li className='flex w-full h-14 justify-center items-center shadow-sm shadow-gray-200/25 cursor-pointer hover:bg-slate-800' onClick={onToggle}>Presencia</li></Link>
              <Link href='/#Ventajas'><li className='flex w-full h-14 justify-center items-center shadow-sm shadow-gray-200/25 cursor-pointer hover:bg-slate-800' onClick={onToggle}>Ventajas</li></Link>
              <Link href='/#Futuras'><li className='flex w-full h-14 justify-center items-center shadow-sm shadow-gray-200/25 cursor-pointer hover:bg-slate-800' onClick={onToggle}>Futuro</li></Link>
              <Link href='/#Trastornos'><li className='flex w-full h-14 justify-center items-center shadow-sm shadow-gray-200/25 cursor-pointer hover:bg-slate-800' onClick={onToggle}>Trastornos</li></Link>
              {/* <li><Link href='/'>Encuesta</Link></li> */}
              <Link href='/#Conclusion'><li className='flex w-full h-14 justify-center items-center shadow-sm shadow-gray-200/25 cursor-pointer hover:bg-slate-800' onClick={onToggle}>Conclusion</li></Link>
              <Link href='/#Referencias'><li className='flex w-full h-14 justify-center items-center shadow-sm shadow-gray-200/25 cursor-pointer hover:bg-slate-800' onClick={onToggle}>Referencias</li></Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar