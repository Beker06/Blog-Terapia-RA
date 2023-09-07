import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import Heading from '@/Components/Heading';
import { useDisponibilidadModal } from '@/hooks/modals/useVentajasModal';

const DisponibilidadModal = () => {

  const thisModal = useDisponibilidadModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Disponibilidad"
            />
            <span className='text-white text-left '>
              Las situaciones temidas no siempre son fácilmente 
              accesibles, y la exposición imaginal (es decir, la 
              exposición a situaciones imaginadas) en estos casos es 
              menos eficaz.
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

export default DisponibilidadModal