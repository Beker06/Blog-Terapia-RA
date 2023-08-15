import Heading from '@/Components/Heading';
import { useFuturaUnoModal } from '@/hooks/modals/useFuturasModal';
import React, { useCallback, useState} from 'react'
import Modal from '../Modal';

const FuturaUno = () => {

    const thisModal = useFuturaUnoModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Sustituyendo los contenidos corporales multisensoriales por otros sintéticos"
            />
            <span className='text-white text-left '>
                Como hemos visto antes, la VR permite distintos tipos de experiencias corporales 
                sintéticas. La más avanzada de ellas es el intercambio corporal completo, en el 
                que el cuerpo del individuo se sustituye por un cuerpo virtual. Los individuos 
                pueden experimentar la perspectiva del otro ,viendo, escuchando y tocando lo que 
                el otro al mismo tiempo. Recientemente, El primer resultado de este enfoque es el 
                desarrollo de un estimulador interoceptivo capaz de mejorar la variabilidad de la 
                frecuencia cardíaca mediante la entrega de estímulos parasimpáticos interoceptivos 
                precisos a los aferentes C-táctiles conectados al sistema espino talamocortical de 
                la lámina I.
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

export default FuturaUno