import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import { useRealidadMixtaModal } from '@/hooks/modals/useIntroducionModal';
import Heading from '@/Components/Heading';

const RealidadMixtaModal = () => {

  const thisModal = useRealidadMixtaModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
      <div className="flex flex-col gap-4">
          <Heading
              title="Realidad Mixta o Fusionada"
          />
          <span className='text-white text-left '>
            Utiliza una lente holográfica para hacer converger la VR 
            y la RA en la que los objetos virtuales interactúan con 
            los objetos del mundo real.
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

export default RealidadMixtaModal