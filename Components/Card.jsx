import Image from 'next/image'
import React from 'react'

const Card = ({title = "Titulo", img, onClick}) => {
  return (
    <div className='
      flex 
      flex-col 
      border-4 
      border-white 
      rounded 
      p-4 
      cursor-pointer 
      transition 
      hover:scale-105 
      delay-50 duration-150 ease-in-out'
      onClick={onClick}
    >
      <h1 className='text-[20px] mb-[5%]'>{title}</h1>
      <div className='flex w-[100%] h-[85%] items-center justify-center overflow-hidden'>
          <Image
          className='flex  h-[100%] rounded-lg object-cover'
          src={img} 
          alt='Imagen-Card'
        />
      </div>
    </div>
  )
}

export default Card