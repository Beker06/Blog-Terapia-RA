import React, { useCallback, useState, useEffect } from 'react'
import Modal from '../Modal'
import Heading from '@/Components/Heading';
import { useDolorAyCModal } from '@/hooks/modals/useIntroducionModal';


const DolorAyCModal = () => {

    const thisModal = useDolorAyCModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Dolor aguddo y cronico"
            />
            <span className='text-white text-left '>
                Se ha demostrado efectividad para aprender diferentes 
                recursos para afrontar el dolor agudo y crónico a 
                través de nuestra mente y el foco de nuestra atención.
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

export default DolorAyCModal