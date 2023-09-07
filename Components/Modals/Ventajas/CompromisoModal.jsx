import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import Heading from '@/Components/Heading';
import { useCompromisoModal } from '@/hooks/modals/useVentajasModal';

const CompromisoModal = () => {

  const thisModal = useCompromisoModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Compromiso"
            />
            <span className='text-white text-left '>
              La inmersión y la interacción que ofrece la VR mejoran 
              el compromiso de la intervención, lo que a su vez 
              permitiría aumentar la adherencia de los participantes 
              a las intervenciones.
            </span>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Ventajas'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default CompromisoModal