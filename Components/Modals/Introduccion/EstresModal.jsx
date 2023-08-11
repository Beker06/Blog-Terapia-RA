import React, { useCallback, useState, useEffect } from 'react'
import Modal from '../Modal'
import Heading from '@/Components/Heading';
import { useEstresModal } from '@/hooks/modals/useIntroducionModal';

const EstresModal = () => {

    const thisModal = useEstresModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Estres"
            />
            <span className='text-white text-left '>
                Permite que los pacientes consigan superar 
                esos momentos de tensión y nerviosismo 
                excesivo propios del estrés mediante el 
                autocontrol y la relajación.
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

export default EstresModal;