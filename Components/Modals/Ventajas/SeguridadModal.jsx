import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import Heading from '@/Components/Heading';
import { useSeguridadModal } from '@/hooks/modals/useVentajasModal';

const SeguridadModal = () => {

  const thisModal = useSeguridadModal();
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
      thisModal.onClose();
  }, [thisModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
          title="Seguridad"
      />
      <span className='text-white text-left '>
        La exposición in vivo puede ser muy aversiva para los pacientes 
        y puede hacer que se sientan muy inseguros, ya que no hay garantía 
        de que algo no vaya a salir mal (por ejemplo, que se pare un 
        ascensor, que haya problemas técnicos en un avión, etc.). La 
        seguridad es una ventaja importante de la VR. Los pacientes 
        pueden controlar el contexto y el entorno generado por el 
        ordenador con el terapeuta a su antojo y sin riesgo alguno.
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

export default SeguridadModal