import React from 'react'

const ModalItem = ({
  text = 'Default',
  textColor = 'white',
  onClick,
}) => {


  return (
    <div 
      className = {`text-${textColor} md:mb-2 mb-1 transition hover:scale-[1.01]`}
    >
      <span 
        onClick = {onClick}
        className='cursor-pointer md:underline'
      >
        {text}
      </span>
    </div>
  )
}

export default ModalItem;