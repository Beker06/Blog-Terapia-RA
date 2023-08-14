import Heading from '@/Components/Heading';
import { useDispositivosSenalizacionModal } from '@/hooks/modals/useIntroducionModal';
import React, { useCallback, useState } from 'react'
import Modal from '../Modal';

const DispositivosSenalizacionModal = () => {

    const thisModal = useDispositivosSenalizacionModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading
            title="Dispositivos de Señalizacion"
        />
        <span className='text-white text-left '>
          Ratón de seis grados de libertad, trackball, joystick, etc.
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

export default DispositivosSenalizacionModal