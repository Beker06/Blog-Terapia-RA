import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import { useRealidadVirtualModal } from '@/hooks/modals/useIntroducionModal';
import Heading from '@/Components/Heading';

const RealidadVirtualModal = () => {

  const thisModal = useRealidadVirtualModal();
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
      thisModal.onClose();
  }, [thisModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading
            title="Realidad Virtual"
        />
        <span className='text-white text-left '>
          Utiliza auriculares de VR o pantallas cerradas montadas 
          en la cabeza (HMDS) para aislar y transponer completamente 
          al usuario a un mundo alternativo.
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

export default RealidadVirtualModal