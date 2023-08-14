import Heading from '@/Components/Heading';
import { useDispositivosSeguimientoModal } from '@/hooks/modals/useIntroducionModal';
import React, { useCallback, useState } from 'react'
import Modal from '../Modal';

const DispositivosSeguimientoModal = () => {

    const thisModal = useDispositivosSeguimientoModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading
            title="Dispositivos de Seguimiento"
        />
        <span className='text-white text-left '>
            Fuantes de datos, sensores de posicionamiento de la 
            cabeza, cámaras integradas, rastreadores oculares, etc.
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

export default DispositivosSeguimientoModal