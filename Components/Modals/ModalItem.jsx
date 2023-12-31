import React from 'react'

const ModalItem = ({
  text = 'Default',
  textColor = 'white',
  onClick,
}) => {


  return (
    <div 
      className = {`text-${textColor} mb-2 transition hover:scale-[1.01]`}
    >
      <span 
        onClick = {onClick}
        className='cursor-pointer underline'
      >
        {text}
      </span>
    </div>
  )
}

export default ModalItem;