import React, { useCallback, useState } from 'react'
import Modal from '../Modal';
import Heading from '@/Components/Heading';
import { useEficaciaModal } from '@/hooks/modals/useVentajasModal';

const EficaciaModal = () => {

  const thisModal = useEficaciaModal();
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
      thisModal.onClose();
  }, [thisModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
          title="Eficacia Personal"
      />
      <span className='text-white text-left '>
        La VR es una importante fuente de eficacia personal. Permite 
        construir "aventuras virtuales" en las que la persona se 
        experimenta a sí misma como competente y eficaz. El objetivo es 
        que la persona descubra que los obstáculos y las situaciones 
        temidas pueden superarse mediante la confrontación y el esfuerzo.
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

export default EficaciaModal