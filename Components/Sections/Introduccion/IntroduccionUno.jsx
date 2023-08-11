import React from 'react'
import Section from '../../Section'
import ModalItem from '../../Modals/ModalItem'
import {useEstresModal, useFobiasMiedosModal} from '@/hooks/modals/useIntroducionModal'
import FobiasMiedosModal from '../../Modals/Introduccion/FobiasMiedosModal'
import EstresModal from '../../Modals/Introduccion/EstresModal'

const IntroduccionUno = () => {

  const fobiasMiedosModal = useFobiasMiedosModal()
  const estresModal = useEstresModal();

  return (
    <Section id="IntroduccionUno">
      <div className = 'mt-[300px]'>
        <ModalItem
          text = 'Fobias y Miedos'
          onClick={fobiasMiedosModal.onOpen}
        />
        <ModalItem
          text = 'Estres'
          onClick={estresModal.onOpen}
        />
      </div>
      <FobiasMiedosModal/>
      <EstresModal/>
    </Section>
  )
}

export default IntroduccionUno