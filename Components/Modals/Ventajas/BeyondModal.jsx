import React, { useCallback, useState } from 'react'
import Modal from '../Modal';
import Heading from '@/Components/Heading';
import { useBeyondModal } from '@/hooks/modals/useVentajasModal';

const BeyondModal = () => {

  const thisModal = useBeyondModal();
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
      thisModal.onClose();
  }, [thisModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
          title="Ir mas allá de la realidad"
      />
      <span className='text-white text-left '>
        Los mundos virtuales permiten crear situaciones o elementos tan 
        "difíciles o amenazantes" que no se esperaría que ocurrieran en 
        el mundo real.
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

export default BeyondModal