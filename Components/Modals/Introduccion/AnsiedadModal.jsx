import React, { useCallback, useState, useEffect } from 'react'
import Modal from '../Modal'
import Heading from '@/Components/Heading';
import { useAnsiedadModal } from '@/hooks/modals/useIntroducionModal';

const AnsiedadModal = () => {

    const thisModal = useAnsiedadModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Transtornos de ansiedad"
            />
            <span className='text-white text-left '>
                Los psicólogos pueden enseñar diferentes 
                métodos para afrontar esta enfermedad.
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

export default AnsiedadModal