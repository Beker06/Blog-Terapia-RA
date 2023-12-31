import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import { useRealidadAumentadaModal } from '@/hooks/modals/useIntroducionModal';
import Heading from '@/Components/Heading';

const RealidadAumentaModal = () => {

  const thisModal = useRealidadAumentadaModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading
            title="Realidad Aumentada"
        />
        <span className='text-white text-left '>
          Añade o complementa nuestra realidad actual con objetos 
          digitales y superposiciones de objetos digitales mejora 
          nuestra presencia "aumentando" la realidad.
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

export default RealidadAumentaModal