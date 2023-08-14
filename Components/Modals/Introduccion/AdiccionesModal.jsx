import React, { useCallback, useState, useEffect } from 'react'
import Modal from '../Modal'
import Heading from '@/Components/Heading';
import { useAdiccionesModal } from '@/hooks/modals/useIntroducionModal';

const AdiccionesModal = () => {

    const thisModal = useAdiccionesModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Adicciones"
            />
            <span className='text-white text-left '>
                También es muy efectiva para proporcionar una exposición segura y 
                controlada a las señales que se relacionan con las adicciones a 
                cualquier tipo de sustancias.
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

export default AdiccionesModal;