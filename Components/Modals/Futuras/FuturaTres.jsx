import React, { useCallback, useState} from 'react'
import Modal from '../Modal';
import Heading from '@/Components/Heading';
import { useFuturaTresModal } from '@/hooks/modals/useFuturasModal';


const FuturaTres = () => {

    const thisModal = useFuturaTresModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Aumentando los contenidos corporales multisensoriales mediante la alteración/ampliación de sus límites (augmented embodiment)"
            />
            <span className='text-white text-left '>
                Al integrar la VR con biosensores, estimulación y dispositivos 
                hápticos, es posible mapear los contenidos de un canal sensorial 
                a otro diferente (por ejemplo, de la visión al tacto o al oído) 
                para aumentar la sensibilidad y sustituir los canales deteriorados. 
            </span>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Investigaciones Futuras'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default FuturaTres