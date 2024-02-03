import Image from 'next/image'
import React from 'react'

const Card = ({title = "Titulo", img, onClick}) => {
  return (
    <div className='
      flex 
      flex-col 
      md:border-4 
      border-2
      border-white 
      rounded 
      mb:p-4
      pt-2
      cursor-pointer 
      transition 
      hover:scale-105 
      delay-50 duration-150 ease-in-out'
      onClick={onClick}
    >
      <h1 className='md:text-[20px] text-xs mb-[5%] md:mx-0 mx-1'>{title}</h1>
      <div className='flex w-[100%] h-[85%] items-center justify-center overflow-hidden'>
          <Image
          className='flex  h-[100%] md:rounded-lg rounded-none object-cover'
          src={img} 
          alt='Imagen-Card'
        />
      </div>
    </div>
  )
}

export default Card