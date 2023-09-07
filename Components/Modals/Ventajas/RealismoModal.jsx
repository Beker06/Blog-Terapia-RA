import React, { useCallback, useState } from 'react'
import Modal from '../Modal';
import Heading from '@/Components/Heading';
import { useRealismoModal } from '@/hooks/modals/useVentajasModal';

const RealismoModal = () => {

  const thisModal = useRealismoModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Realismo y presencia"
            />
            <span className='text-white text-left '>
              A diferencia de la exposición imaginal, los usuarios en 
              VR se sienten presentes y juzgan su situación como real. 
              Este aspecto es fundamental ya que la terapia de exposición 
              pretende facilitar el procesamiento emocional de los 
              recuerdos de miedo.
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

export default RealismoModal