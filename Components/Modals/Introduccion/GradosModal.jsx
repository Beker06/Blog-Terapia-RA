import Heading from '@/Components/Heading';
import React, { useCallback, useState } from 'react'
import Modal from '../Modal';
import { useGradosModal } from '@/hooks/modals/useIntroducionModal';

const GradosModal = () => {

    const thisModal = useGradosModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="360 Grados"
            />
            <span className='text-white text-left '>
                Crea fotos o vídeos panorámicos de 360 grados 
                utiliza cámaras de 360 grados para unir varias 
                imágenes.
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

export default GradosModal