import React, { useCallback, useState, useEffect } from 'react'
import Modal from '../Modal'
import Heading from '@/Components/Heading';
import {useFobiasMiedosModal} from '@/hooks/modals/useIntroducionModal'


const FobiasMiedosModal = () => {
    const thisModal = useFobiasMiedosModal();
    const [isLoading, setIsLoading] = useState(false);


    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Fobias y Miedos"
            />
            <span className='text-white text-left '>
                Hace posible someter al paciente a una realidad en la que puede superar sus miedos o fobias. 
                De este modo, es un programa destinado a sujetos que sufren trastornos relacionados con las fobias, 
                especialmente aquellas que implican el miedo a volar o a los espacios cerrados o abiertos, 
                así como a determinados insectos.
            </span>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Introduccion'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
        
    />
  )
}

export default FobiasMiedosModal;