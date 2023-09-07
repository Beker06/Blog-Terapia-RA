import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import { useDolorModal } from '@/hooks/modals/useTrastornosModal';

const DolorModal = () => {

    const thisModal = useDolorModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4 text-white text-left">
            <p>
                Las intervenciones de VR se han utilizado en el tratamiento del 
                dolor agudo relacionado con intervenciones sanitarias durante más 
                de dos décadas. Los enfoques farmacológicos siguen siendo el pilar 
                de la mayoría de las intervenciones, pero sus importantes 
                inconvenientes -como los estrechos márgenes terapéuticos, los 
                efectos secundarios adversos y el abuso y la dependencia de los 
                fármacos- están convirtiendo las intervenciones basadas en la VR 
                en una valiosa opción.
            </p>
            <p>
                El enfoque más común utilizado en el tratamiento del dolor agudo 
                con VR es la distracción. Este enfoque utiliza la VR para atraer 
                la atención del paciente hacia el mundo generado por ordenador, 
                desviándose de las señales de dolor entrantes. Como subraya una 
                revisión sistemática, mientras que la sensación de presencia en 
                la experiencia de VR influye en su eficacia como herramienta de 
                distracción, la ansiedad y las emociones positivas afectan 
                directamente a la experiencia del dolor. De hecho, es bien sabido 
                que el efecto negativo empeora el dolor declarado al activar el 
                córtex de la ínsula. Desde este punto de vista, la distracción 
                también puede potenciarse mediante el uso de la VR para inducir 
                emociones positivas.
            </p>
            <p>
                Un último mecanismo utilizado para inducir la analgesia de la VR 
                es el desarrollo de habilidades. Este enfoque utiliza la VR para 
                desarrollar las habilidades y competencias necesarias para ayudar 
                a las personas a regular su respuesta a los estímulos dolorosos. 
                Al igual que en el cambio de enfoque, el usuario desempeña un 
                papel activo. Sin embargo, el objetivo de la experiencia de VR en 
                este caso es ayudar a los pacientes a autorregular el dolor, por 
                ejemplo, controlando la respiración durante la experiencia de 
                dolor para mejorar la sensación de control del paciente.
            </p>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Tratamiento del Dolor'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default DolorModal