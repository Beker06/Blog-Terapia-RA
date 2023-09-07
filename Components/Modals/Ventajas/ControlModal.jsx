import React, { useCallback, useState } from 'react'
import Modal from '../Modal';
import Heading from '@/Components/Heading';
import { useControlModal } from '@/hooks/modals/useVentajasModal';

const ControlModal = () => {

  const thisModal = useControlModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="Control"
        />
        <span className='text-white text-left '>
          La exposición a la VR permite un control casi total de todo 
          lo que ocurre en la situación vivida por la persona en el 
          mundo virtual, incluyendo diferentes elementos que pueden 
          hacer que la situación sea más o menos amenazante 
          (por ejemplo, el número o el tamaño de las personas, animales 
          u objetos temidos; la altura de los espacios; la presencia 
          de elementos de protección, etc.). Además, el terapeuta puede 
          saber en todo momento qué ocurre en la situación, a qué 
          elementos se enfrenta el paciente y qué le perturba. Además, 
          en la VR también es posible controlar el encuadre de la 
          experiencia. Como subrayan Balzarotti y Ciceri (Balzarotti y 
          Ciceri, 2014) las experiencias enmarcadas positivamente 
          generan menos miedo que las enmarcadas negativamente.
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

export default ControlModal